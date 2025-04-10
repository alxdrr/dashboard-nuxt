<template>
  <div class="tw:space-y-4">
    <!-- Tabs -->
    <div class="tw:flex tw:gap-4 tw:border-b tw:border-gray-200">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        :class="['tw:pb-2 tw:text-sm tw:font-medium', activeTab === tab ? 'tw:border-b-2 tw:border-black tw:text-black' : 'tw:text-gray-500 tw:hover:text-black']"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Table Card -->
    <Card title="Reservations">
      <template #icon>
        <div class="tw:flex tw:justify-between tw:items-center tw:gap-4">
          <div class="tw:relative tw:w-64">
            <input type="text" placeholder="Search" class="tw:w-full tw:pl-4 tw:pr-4 tw:py-2 tw:bg-neutral-50 tw:rounded-md tw:text-sm" />
            <Search class="tw:absolute tw:right-4 tw:top-2.tw:5 tw:w-4 tw:h-4 tw:text-gray-400" />
          </div>
          <Button variant="outline" class="tw:text-sm">Export CSV</Button>
        </div>
      </template>

      <table class="tw:w-full tw:text-sm tw:text-left">
        <thead class="tw:bg-gray-100 tw:text-gray-700">
          <tr>
            <th class="tw:px-4 tw:py-2 tw:text-xs">Guest Name</th>
            <th class="tw:px-4 tw:py-2 tw:text-xs">Staying at - From/To date-time</th>
            <th class="tw:px-4 tw:py-2 tw:text-xs">Status</th>
            <th class="tw:px-4 tw:py-2 tw:text-xs">Stripe Payment</th>
            <th class="tw:px-4 tw:py-2 tw:text-xs">Total Orders</th>
            <th class="tw:px-4 tw:py-2 tw:text-xs">Chat with us</th>
            <th class="tw:px-4 tw:py-2 tw:text-xs">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in reservations" :key="index" class="tw:border-b">
            <td class="tw:px-4 tw:py-1 tw:font-medium tw:text-xs">{{ item.name }}</td>
            <td class="tw:px-4 tw:py-1 tw:font-medium tw:text-xs">
              {{ item.location }} <br />
              <span class="tw:text-xs tw:text-gray-400">{{ item.date }}</span>
            </td>
            <td class="tw:px-4 tw:py-1">
              <span
                :class="[
                  'tw:text-xs tw:px-2 tw:py-1 tw:rounded-sm tw:font-medium tw:text-white',
                  item.status === 'Verified' ? 'tw:bg-green-400' : item.status === 'Check in' ? 'tw:bg-orange-400' : 'tw:bg-red-400',
                ]"
              >
                {{ item.status }}
              </span>
            </td>
            <td class="tw:px-4 tw:py-1 tw:text-xs">
              <div class="tw:flex tw:items-center tw:gap-2 tw:border-1 tw:justify-center tw:py-1 tw:rounded-full"><ShoppingCart class="tw:w-4 tw:h-4" /> 0 Payment</div>
            </td>
            <td class="tw:px-4 tw:py-1 tw:text-xs">
              <div class="tw:flex tw:items-center tw:gap-2 tw:border-1 tw:justify-center tw:py-1 tw:rounded-full"><ShoppingCart class="tw:w-4 tw:h-4" /> 0 Order</div>
            </td>
            <td class="tw:px-4 tw:py-1 tw:text-xs">
              <div @click="openChat(item)" class="tw:relative tw:flex tw:items-center tw:gap-2 tw:border-1 tw:justify-center tw:py-1 tw:rounded-full tw:cursor-pointer">
                <MessageCircle class="tw:w-4 tw:h-4" />
                Chat with us
                <span
                  v-if="item.messages > 0"
                  class="tw:absolute tw:z-10 tw:-top-2 tw:-right-2 tw:ml-2 tw:text-xs tw:text-white tw:bg-green-400 tw:rounded-full tw:w-5 tw:h-5 tw:flex tw:items-center tw:justify-center"
                >
                  {{ item.messages }}
                </span>
              </div>
            </td>
            <td class="tw:px-4 tw:py-1">
              <button @click="openDetail(item)">
                <EllipsisVertical class="tw:w-4 tw:h-4 tw:cursor-pointer" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Offcanvas :show="showChat" @close="showChat = false">
        <div class="tw:h-full tw:p-4 tw:space-y-4 tw:flex tw:flex-col">
          <div class="tw:relative">
            <button @click="showChat = false" class="tw:absolute -tw:left-6 tw:text-gray-500 tw:hover:text-black tw:text-xl">&times;</button>
            <div>
              <h2 class="tw:text-lg tw:font-semibold">Chat with Us</h2>
            </div>
          </div>

          <div class="tw:rounded-lg tw:p-4 tw:space-y-2 tw:bg-gr tw:ay-50">
            <h3 class="tw:text-md tw:font-semibold">
              {{ selectedChat?.name }} <span class="tw:text-gray-400">+{{ selectedChat?.guestCount - 1 }} Guests</span>
            </h3>
            <p class="tw:text-sm tw:flex tw:items-center tw:gap-1">
              <Calendar size="14" />
              {{ selectedChat?.checkIn }} - {{ selectedChat?.checkOut }}
            </p>
            <p class="tw:text-sm tw:flex tw:items-center tw:gap-1">
              <MapPin size="14" />
              {{ selectedChat?.roomInfo }}
            </p>
          </div>

          <!-- Chat messages -->
          <div class="tw:space-y-3 tw:flex tw:flex-col tw:h-full">
            <div class="tw:bg-yellow-300 tw:text-sm tw:text-black tw:max-w-2/3 tw:p-3 tw:rounded-lg tw:rounded-tr-none tw:self-end">
              Good afternoon Juliantara!, Front office here, is there anything we can do to help you?
            </div>
            <div class="tw:bg-gray-200 tw:text-sm tw:text-black tw:max-w-2/3 tw:p-3 tw:rounded-lg tw:rounded-tl-none tw:w-fit">Yes, where’s the key?</div>
            <div class="tw:bg-yellow-300 tw:text-sm tw:text-black tw:max-w-2/3 tw:p-3 tw:rounded-lg tw:rounded-tr-none tw:w-fit tw:self-end">
              Good afternoon! If you're looking for the property key, please head over to the front desk, and we'll be happy to assist you.
            </div>
          </div>

          <!-- Input -->
          <div class="tw:pt-4 tw:flex tw:flex-col tw:gap-2">
            <input type="text" placeholder="Type a message..." class="tw:flex-1 tw:bg-gray-200 tw:rounded-sm tw:px-3 tw:py-2 tw:text-sm" />
            <div class="tw:flex tw:justify-between">
              <button class="tw:flex tw:justify-center tw:items-center tw:gap-2 tw:py-2 tw:text-gray-600 tw:rounded-sm tw:w-max">
                <Sparkles color="gray" size="14" />
                <p>Generate</p>
              </button>
              <button class="tw:px-12 tw:py-2 tw:bg-gray-200 tw:text-gray-600 tw:rounded-lg">Send</button>
            </div>
          </div>
        </div>
      </Offcanvas>

      <Offcanvas :show="showDetail" @close="showDetail = false">
        <div class="tw:p-4 tw:space-y-6">
          <!-- Header -->
          <div class="tw:relative">
            <button @click="showDetail = false" class="tw:absolute tw:-left-6 tw:text-gray-500 tw:hover:text-black tw:text-xl">&times;</button>
            <div>
              <h2 class="tw:text-lg tw:font-semibold">Detail Reservation</h2>
            </div>
          </div>

          <!-- Nama dan waktu -->
          <div class="tw:space-y-1">
            <h3 class="tw:text-xl tw:font-semibold">
              {{ selectedReservation?.name }}
              <span class="tw:text-gray-400 tw:text-xs tw:font-normal">+{{ selectedReservation?.guestCount - 1 }} Guests</span>
            </h3>

            <p class="tw:text-sm tw:flex tw:items-center tw:gap-1">
              <Calendar size="14" />
              {{ selectedReservation?.checkIn }} - {{ selectedReservation?.checkOut }}
            </p>
            <p class="tw:text-sm tw:flex tw:items-center tw:gap-1">
              <MapPin size="14" />
              {{ selectedReservation?.roomInfo }}
            </p>
            <hr class="tw:border-neutral-200 tw:mt-2" />
          </div>
          <!-- Status dan tombol ubah -->
          <div class="tw:bg-gray-100 tw:rounded-lg tw:p-4 tw:space-y-4">
            <div class="tw:grid tw:grid-cols-2 tw:gap-y-2 tw:text-sm tw:relative">
              <p class="tw:font-medium">Status</p>
              <span
                :class="[
                  'text-xs px-2 py-1 rounded-sm font-medium text-white w-max',
                  selectedReservation?.status === 'Verified' ? 'bg-green-400' : selectedReservation?.status === 'Check in' ? 'bg-orange-400' : 'bg-red-400',
                ]"
              >
                {{ selectedReservation?.status }}
              </span>
              <a href="" class="tw:underline tw:absolute tw:right-2 tw:text-xs">Change status</a>
              <hr class="tw:col-span-2 tw:border-neutral-300" />

              <p class="tw:font-medium">Reservation ID</p>
              <p>{{ selectedReservation?.reservationId }}</p>

              <hr class="tw:col-span-2 tw:border-neutral-300" />

              <p class="tw:font-medium">Email</p>
              <p>{{ selectedReservation?.email }}</p>

              <hr class="tw:col-span-2 tw:border-neutral-300" />

              <p class="tw:font-medium">Verify Type</p>
              <p>{{ selectedReservation?.verifyType }}</p>

              <hr class="tw:col-span-2 tw:border-neutral-300" />

              <p class="tw:font-medium">Age Group</p>
              <p>{{ selectedReservation?.ageGroup }}</p>

              <hr class="tw:col-span-2 tw:border-neutral-300" />

              <p class="tw:font-medium">Country of Origin</p>
              <p>{{ selectedReservation?.originCountry }}</p>

              <hr class="tw:col-span-2 tw:border-neutral-300" />

              <p class="tw:font-medium">Nationality</p>
              <p>{{ selectedReservation?.nationality }}</p>

              <hr class="tw:col-span-2 tw:border-neutral-300" />

              <p class="tw:font-medium">Birth Date</p>
              <p>{{ selectedReservation?.birthDate }}</p>

              <hr class="tw:col-span-2 tw:border-neutral-300" />

              <p class="tw:font-medium">Reason for Travel</p>
              <p>{{ selectedReservation?.travelReason }}</p>

              <hr class="tw:col-span-2 tw:border-neutral-300" />

              <p class="tw:font-medium">Type of ID</p>
              <p>{{ selectedReservation?.idType }}</p>

              <hr class="tw:col-span-2 tw:border-neutral-300" />

              <p class="tw:font-medium">ID Number</p>
              <p>{{ selectedReservation?.idNumber }}</p>

              <hr class="tw:col-span-2 tw:border-neutral-300" />

              <p class="tw:font-medium">Mode of Transport</p>
              <p>{{ selectedReservation?.transportMode }}</p>

              <hr class="tw:col-span-2 tw:border-neutral-300" />

              <p class="tw:font-medium">Estimated Check-in</p>
              <p>{{ selectedReservation?.estimatedCheckIn }}</p>
            </div>
          </div>

          <!-- Guest Guide -->
          <div class="tw:pt-4 tw:flex tw:gap-4">
            <button class="tw:w-full tw:bg-yellow-400 tw:hover:bg-yellow-500 tw:py-2 tw:rounded-sm tw:font-semibold">View Guest Guide</button>
            <button class="tw:hover:bg-neutral-200 tw:p-2 tw:border-2 tw:border-yellow-500 tw:rounded-sm tw:font-semibold"><Copy /></button>
          </div>
        </div>
      </Offcanvas>

      <div class="tw:flex tw:items-center tw:justify-between tw:text-sm tw:text-gray-500 tw:px-4 tw:py-3">
        <span>Showing 10 of 110 Results</span>
        <div class="tw:flex tw:items-center tw:gap-2">
          <ChevronLeft class="tw:w-4 tw:h-4" />
          <div class="tw:flex tw:gap-1">
            <button class="tw:px-2 tw:py-1 tw:rounded tw:bg-yellow-400 tw:text-white">1</button>
            <button class="tw:px-2 tw:py-1">2</button>
            <button class="tw:px-2 tw:py-1">3</button>
            <span class="tw:px-2 tw:py-1">...</span>
            <button class="tw:px-2 tw:py-1">10</button>
          </div>
          <ChevronRight class="tw:w-4 tw:h-4" />
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search, MessageCircle, ShoppingCart, ChevronLeft, ChevronRight, EllipsisVertical, Calendar, MapPin, Copy, Sparkles } from "lucide-vue-next";
import Button from "../components/ui/Button.vue";
import Card from "../components/ui/Card.vue";

const showDetail = ref(false);
const selectedReservation = ref(null);

function openDetail(reservation) {
  selectedReservation.value = reservation;
  showDetail.value = true;
}

const showChat = ref(false);
const selectedChat = ref(null);

function openChat(guest) {
  selectedChat.value = guest;
  showChat.value = true;
}
const tabs = ["Ongoing", "Previous", "Cancelled"];
const activeTab = ref("Ongoing");

const reservations = ref([
  {
    name: "Oliver Bennett",
    guestCount: 2,
    location: "The Maple Grove Residences",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    checkIn: "19 May - 02:00 PM",
    checkOut: "26 May - 01:30 PM",
    roomInfo: "The Maple Grove Residences - Executive Suite",
    status: "Verified",
    reservationId: "resv-001",
    email: "oliver.bennett@example.com",
    verifyType: "Individual",
    ageGroup: "Adult",
    originCountry: "United Kingdom",
    nationality: "British",
    birthDate: "10 Jun 1985",
    travelReason: "Business",
    idType: "Passport",
    idNumber: "A123456789",
    transportMode: "Plane",
    estimatedCheckIn: "19 May 2025, 02:00 PM",
    messages: 2,
  },
  {
    name: "Ethan Clark",
    guestCount: 3,
    location: "The Maple Grove Residences",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    checkIn: "19 May - 02:00 PM",
    checkOut: "26 May - 01:30 PM",
    roomInfo: "The Maple Grove Residences - Deluxe Room",
    status: "Verified",
    reservationId: "resv-002",
    email: "ethan.clark@example.com",
    verifyType: "Group",
    ageGroup: "Adult",
    originCountry: "USA",
    nationality: "American",
    birthDate: "22 Nov 1990",
    travelReason: "Leisure",
    idType: "Driver License",
    idNumber: "DL9847352",
    transportMode: "Car",
    estimatedCheckIn: "19 May 2025, 02:00 PM",
    messages: 2,
  },
  {
    name: "James Wilson",
    guestCount: 1,
    location: "The Maple Grove Residences",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    checkIn: "19 May - 02:00 PM",
    checkOut: "26 May - 01:30 PM",
    roomInfo: "The Maple Grove Residences - Studio",
    status: "Verified",
    reservationId: "resv-003",
    email: "james.wilson@example.com",
    verifyType: "Individual",
    ageGroup: "Adult",
    originCountry: "Australia",
    nationality: "Australian",
    birthDate: "08 Mar 1988",
    travelReason: "Business",
    idType: "Passport",
    idNumber: "AU82947382",
    transportMode: "Plane",
    estimatedCheckIn: "19 May 2025, 02:00 PM",
    messages: 2,
  },
  {
    name: "Lily Martinez",
    guestCount: 2,
    location: "The Maple Grove Residences",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    checkIn: "19 May - 02:00 PM",
    checkOut: "26 May - 01:30 PM",
    roomInfo: "The Maple Grove Residences - Cozy Room",
    status: "Verified",
    reservationId: "resv-004",
    email: "lily.martinez@example.com",
    verifyType: "Individual",
    ageGroup: "Adult",
    originCountry: "Spain",
    nationality: "Spanish",
    birthDate: "18 Dec 1992",
    travelReason: "Leisure",
    idType: "National ID",
    idNumber: "ES93847282",
    transportMode: "Train",
    estimatedCheckIn: "19 May 2025, 02:00 PM",
    messages: 2,
  },
  {
    name: "Sofia Bennett",
    guestCount: 4,
    location: "The Oakwood Suites",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    checkIn: "19 May - 02:00 PM",
    checkOut: "26 May - 01:30 PM",
    roomInfo: "The Oakwood Suites - Family Suite",
    status: "Check in",
    reservationId: "resv-005",
    email: "sofia.bennett@example.com",
    verifyType: "Group",
    ageGroup: "Adult",
    originCountry: "Indonesia",
    nationality: "Indonesian",
    birthDate: "14 Mar 1999",
    travelReason: "Business",
    idType: "Passport",
    idNumber: "273293938882",
    transportMode: "Plane",
    estimatedCheckIn: "22 Mar 2025, 08:00 AM",
    messages: 10,
  },
  {
    name: "Masson Torres",
    guestCount: 2,
    location: "The R Loft Bali",
    date: "16 Mar - 20 Mar (4 days)",
    checkIn: "16 Mar - 02:00 PM",
    checkOut: "20 Mar - 12:00 PM",
    roomInfo: "The R Loft Bali - Cosy Room incl Breakfast",
    status: "Check in",
    reservationId: "resv-006",
    email: "masson.torres@example.com",
    verifyType: "Individual",
    ageGroup: "Adult",
    originCountry: "France",
    nationality: "French",
    birthDate: "12 Sep 1984",
    travelReason: "Leisure",
    idType: "Passport",
    idNumber: "FR12934823",
    transportMode: "Plane",
    estimatedCheckIn: "16 Mar 2025, 02:00 PM",
    messages: 1,
  },
  {
    name: "Noah Smith",
    guestCount: 1,
    location: "The R Loft Bali",
    date: "17 Mar - 21 Mar (4 days)",
    checkIn: "17 Mar - 01:00 PM",
    checkOut: "21 Mar - 12:00 PM",
    roomInfo: "The R Loft Bali - Studio with Balcony",
    status: "Verify",
    reservationId: "resv-007",
    email: "noah.smith@example.com",
    verifyType: "Individual",
    ageGroup: "Adult",
    originCountry: "USA",
    nationality: "American",
    birthDate: "03 Jan 1996",
    travelReason: "Business",
    idType: "Driver License",
    idNumber: "US83848572",
    transportMode: "Car",
    estimatedCheckIn: "17 Mar 2025, 01:00 PM",
    messages: 0,
  },
  {
    name: "Lucas White",
    guestCount: 3,
    location: "The R Loft Bali",
    date: "18 Mar - 22 Mar (4 days)",
    checkIn: "18 Mar - 03:00 PM",
    checkOut: "22 Mar - 12:00 PM",
    roomInfo: "The R Loft Bali - Deluxe Garden View",
    status: "Verify",
    reservationId: "resv-008",
    email: "lucas.white@example.com",
    verifyType: "Group",
    ageGroup: "Adult",
    originCountry: "Canada",
    nationality: "Canadian",
    birthDate: "29 May 1990",
    travelReason: "Leisure",
    idType: "Passport",
    idNumber: "CA93848292",
    transportMode: "Plane",
    estimatedCheckIn: "18 Mar 2025, 03:00 PM",
    messages: 4,
  },
]);
</script>
