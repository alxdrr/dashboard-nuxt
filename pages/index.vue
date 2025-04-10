<template>
  <aside class="tw:grid tw:grid-cols-4 tw:gap-6">
    <Card title="Total upsells">
      <template #icon>
        <div class="tw:text-green-700 tw:flex tw:gap-2 tw:text-xs tw:justify-center tw:items-center"><TrendingUp color="green" size="12" /> +16.24%</div>
      </template>
      <p class="tw:text-5xl tw:font-medium tw:text-neutral-800 tw:mb-2">20</p>
      <a href="" class="tw:text-yellow-900 tw:underline tw:font-medium tw:text-xs">view all upsells</a>
      <div class="tw:p-4 tw:bg-neutral-100 tw:absolute tw:bottom-4 tw:right-4 tw:rounded-md">$652</div>
    </Card>

    <Card title="Total orders">
      <template #icon>
        <div class="tw:text-green-700 tw:text-xs tw:flex tw:gap-2 tw:justify-center tw:items-center"><TrendingUp color="green" size="12" /> +12.24%</div>
      </template>
      <p class="tw:text-5xl tw:font-medium tw:text-neutral-800 tw:mb-2">17</p>
      <a href="" class="tw:text-yellow-900 tw:underline tw:font-medium tw:text-xs">view all orders</a>
      <div class="tw:p-4 tw:bg-neutral-100 tw:absolute tw:bottom-4 tw:right-4 tw:rounded-md">$4029</div>
    </Card>

    <Card title="Total active properties">
      <p class="tw:text-5xl tw:font-medium tw:text-neutral-800 tw:mb-2">3</p>
      <a href="" class="tw:text-yellow-900 tw:underline tw:font-medium tw:text-xs">View all listings</a>
      <div class="tw:p-4 tw:bg-neutral-100 tw:absolute tw:bottom-4 tw:right-4 tw:rounded-md"><House /></div>
    </Card>

    <Card title="Total customers">
      <template #icon>
        <div class="tw:text-green-700 tw:text-xs tw:flex tw:gap-2 tw:justify-center tw:items-center"><TrendingUp color="green" size="12" /> +11.24%</div>
      </template>
      <p class="tw:text-5xl tw:font-medium tw:text-neutral-800 tw:mb-2">15</p>
      <a href="" class="tw:text-yellow-900 tw:underline tw:font-medium tw:text-xs">View all customers</a>
      <div class="tw:p-4 tw:bg-neutral-100 tw:absolute tw:bottom-4 tw:right-4 tw:rounded-md"><Users /></div>
    </Card>

    <Card title="Sessions by Countries" class="tw:col-span-3">
      <template #icon>
        <div class="tw:text-xs tw:flex tw:gap-2 tw:justify-center tw:items-center">
          <CirclePlus color="gray" size="20" /><CircleMinus color="gray" size="20" /><ZoomIn color="gray" size="20" /><House size="20" /><EllipsisVertical size="20" />
        </div>
      </template>

      <SplineArea />
    </Card>

    <Card title="Current Statistic">
      <template #icon>
        <div class="tw:text-xs tw:flex tw:gap-2 tw:justify-center tw:items-center"><EllipsisVertical size="20" /></div>
      </template>

      <RadialStat />
    </Card>

    <Card title="My Tasks" class="tw:col-span-2">
      <template #icon>
        <div class="tw:text-xs tw:flex tw:gap-2 tw:justify-center tw:items-center">
          <EllipsisVertical size="20" />
        </div>
      </template>

      <table class="tw:w-full tw:text-sm tw:text-left tw:mt-4">
        <thead class="tw:text-gray-600 tw:border-b tw:border-gray-200">
          <tr>
            <th class="tw:px-1 tw:py-1"><input type="checkbox" /></th>
            <th class="tw:px-1 tw:py-1">Listing</th>
            <th class="tw:px-1 tw:py-1">Task Name</th>
            <th class="tw:px-1 tw:py-1">Priority</th>
            <th class="tw:px-1 tw:py-1">Date/Time Report</th>
            <th class="tw:px-1 tw:py-1">Progress</th>
            <th class="tw:px-1 tw:py-1">Assignee</th>
          </tr>
        </thead>
        <tbody class="tw:text-gray-700 tw:divide-y tw:divide-gray-200">
          <tr class="tw:hover:bg-gray-50">
            <td class="tw:px-1 tw:py-1">
              <input type="checkbox" />
            </td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:font-semibold">ID: 15</div>
              <div class="tw:text-xs tw:text-gray-500">The R Apartment</div>
            </td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:font-semibold">ID: 4330</div>
              <div class="tw:text-xs tw:text-gray-500">Minibar stock report</div>
              <span class="tw:text-[tw:10px] tw:mt-1 tw:inline-block tw:bg-gray-700 tw:text-white tw:px-2 tw:py-[tw:2px] tw:rounded-full">Periodic</span>
            </td>
            <td class="tw:px-1 tw:py-1">
              <span class="tw:bg-orange-400 tw:text-white tw:text-xs tw:font-medium tw:px-2 tw:py-1 tw:rounded">Medium</span>
            </td>
            <td class="tw:px-1 tw:py-1 tw:text-sm tw:text-gray-600">19 Feb - 09:00AM</td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:flex tw:items-center tw:gap-2">
                <div class="tw:w-12 tw:bg-gray-200 tw:h-1 tw:rounded-full tw:overflow-hidden">
                  <div class="tw:bg-yellow-400 tw:h-1" style="width: 75%"></div>
                </div>
                <span class="tw:text-xs tw:font-medium tw:text-gray-600">75%</span>
              </div>
            </td>
            <td class="tw:px-4 tw:py-3">
              <div class="tw:flex tw:items-center tw:gap-3 tw:text-gray-500">
                <button><Eye size="16" /></button>
                <button><Pencil size="16" /></button>
                <button><Trash size="16" class="tw:text-red-500" /></button>
              </div>
            </td>
          </tr>
          <tr class="tw:hover:bg-gray-50">
            <td class="tw:px-1 tw:py-1">
              <input type="checkbox" />
            </td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:font-semibold">ID: 15</div>
              <div class="tw:text-xs tw:text-gray-500">The R Apartment</div>
            </td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:font-semibold">ID: 4330</div>
              <div class="tw:text-xs tw:text-gray-500">Minibar stock report</div>
              <span class="tw:text-[tw:10px] tw:mt-1 tw:inline-block tw:bg-gray-700 tw:text-white tw:px-2 tw:py-[tw:2px] tw:rounded-full">Periodic</span>
            </td>
            <td class="tw:px-1 tw:py-1">
              <span class="tw:bg-orange-400 tw:text-white tw:text-xs tw:font-medium tw:px-2 tw:py-1 tw:rounded">Medium</span>
            </td>
            <td class="tw:px-1 tw:py-1 tw:text-sm tw:text-gray-600">19 Feb - 09:00AM</td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:flex tw:items-center tw:gap-2">
                <div class="tw:w-12 tw:bg-gray-200 tw:h-1 tw:rounded-full tw:overflow-hidden">
                  <div class="tw:bg-yellow-400 tw:h-1" style="width: 75%"></div>
                </div>
                <span class="tw:text-xs tw:font-medium tw:text-gray-600">75%</span>
              </div>
            </td>
            <td class="tw:px-4 tw:py-3">
              <div class="tw:flex tw:items-center tw:gap-3 tw:text-gray-500">
                <button><Eye size="16" /></button>
                <button><Pencil size="16" /></button>
                <button><Trash size="16" class="tw:text-red-500" /></button>
              </div>
            </td>
          </tr>
          <tr class="tw:hover:bg-gray-50">
            <td class="tw:px-1 tw:py-1">
              <input type="checkbox" />
            </td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:font-semibold">ID: 15</div>
              <div class="tw:text-xs tw:text-gray-500">The R Apartment</div>
            </td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:font-semibold">ID: 4330</div>
              <div class="tw:text-xs tw:text-gray-500">Minibar stock report</div>
              <span class="tw:text-[tw:10px] tw:mt-1 tw:inline-block tw:bg-gray-700 tw:text-white tw:px-2 tw:py-[tw:2px] tw:rounded-full">Periodic</span>
            </td>
            <td class="tw:px-1 tw:py-1">
              <span class="tw:bg-orange-400 tw:text-white tw:text-xs tw:font-medium tw:px-2 tw:py-1 tw:rounded">Medium</span>
            </td>
            <td class="tw:px-1 tw:py-1 tw:text-sm tw:text-gray-600">19 Feb - 09:00AM</td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:flex tw:items-center tw:gap-2">
                <div class="tw:w-12 tw:bg-gray-200 tw:h-1 tw:rounded-full tw:overflow-hidden">
                  <div class="tw:bg-yellow-400 tw:h-1" style="width: 75%"></div>
                </div>
                <span class="tw:text-xs tw:font-medium tw:text-gray-600">75%</span>
              </div>
            </td>
            <td class="tw:px-4 tw:py-3">
              <div class="tw:flex tw:items-center tw:gap-3 tw:text-gray-500">
                <button><Eye size="16" /></button>
                <button><Pencil size="16" /></button>
                <button><Trash size="16" class="tw:text-red-500" /></button>
              </div>
            </td>
          </tr>
          <tr class="tw:hover:bg-gray-50">
            <td class="tw:px-1 tw:py-1">
              <input type="checkbox" />
            </td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:font-semibold">ID: 15</div>
              <div class="tw:text-xs tw:text-gray-500">The R Apartment</div>
            </td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:font-semibold">ID: 4330</div>
              <div class="tw:text-xs tw:text-gray-500">Minibar stock report</div>
              <span class="tw:text-[tw:10px] tw:mt-1 tw:inline-block tw:bg-gray-700 tw:text-white tw:px-2 tw:py-[tw:2px] tw:rounded-full">Periodic</span>
            </td>
            <td class="tw:px-1 tw:py-1">
              <span class="tw:bg-orange-400 tw:text-white tw:text-xs tw:font-medium tw:px-2 tw:py-1 tw:rounded">Medium</span>
            </td>
            <td class="tw:px-1 tw:py-1 tw:text-sm tw:text-gray-600">19 Feb - 09:00AM</td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:flex tw:items-center tw:gap-2">
                <div class="tw:w-12 tw:bg-gray-200 tw:h-1 tw:rounded-full tw:overflow-hidden">
                  <div class="tw:bg-yellow-400 tw:h-1" style="width: 75%"></div>
                </div>
                <span class="tw:text-xs tw:font-medium tw:text-gray-600">75%</span>
              </div>
            </td>
            <td class="tw:px-4 tw:py-3">
              <div class="tw:flex tw:items-center tw:gap-3 tw:text-gray-500">
                <button><Eye size="16" /></button>
                <button><Pencil size="16" /></button>
                <button><Trash size="16" class="tw:text-red-500" /></button>
              </div>
            </td>
          </tr>
          <tr class="tw:hover:bg-gray-50">
            <td class="tw:px-1 tw:py-1">
              <input type="checkbox" />
            </td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:font-semibold">ID: 15</div>
              <div class="tw:text-xs tw:text-gray-500">The R Apartment</div>
            </td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:font-semibold">ID: 4330</div>
              <div class="tw:text-xs tw:text-gray-500">Minibar stock report</div>
              <span class="tw:text-[tw:10px] tw:mt-1 tw:inline-block tw:bg-gray-700 tw:text-white tw:px-2 tw:py-[tw:2px] tw:rounded-full">Periodic</span>
            </td>
            <td class="tw:px-1 tw:py-1">
              <span class="tw:bg-orange-400 tw:text-white tw:text-xs tw:font-medium tw:px-2 tw:py-1 tw:rounded">Medium</span>
            </td>
            <td class="tw:px-1 tw:py-1 tw:text-sm tw:text-gray-600">19 Feb - 09:00AM</td>
            <td class="tw:px-1 tw:py-1">
              <div class="tw:flex tw:items-center tw:gap-2">
                <div class="tw:w-12 tw:bg-gray-200 tw:h-1 tw:rounded-full tw:overflow-hidden">
                  <div class="tw:bg-yellow-400 tw:h-1" style="width: 75%"></div>
                </div>
                <span class="tw:text-xs tw:font-medium tw:text-gray-600">75%</span>
              </div>
            </td>
            <td class="tw:px-4 tw:py-3">
              <div class="tw:flex tw:items-center tw:gap-3 tw:text-gray-500">
                <button><Eye size="16" /></button>
                <button><Pencil size="16" /></button>
                <button><Trash size="16" class="tw:text-red-500" /></button>
              </div>
            </td>
          </tr>
          +
        </tbody>
      </table>

      <div class="tw:flex tw:justify-center tw:mt-4">
        <button class="tw:px-4 tw:py-2 tw:border tw:border-gray-300 tw:rounded tw:hover:bg-gray-100 tw:text-sm tw:text-gray-600">Load More</button>
      </div>
    </Card>

    <Card title="Team Members" class="tw:col-span-2">
      <template #icon>
        <div class="tw:text-xs tw:flex tw:gap-2 tw:justify-center tw:items-center">
          <EllipsisVertical size="20" />
        </div>
      </template>

      <table class="tw:w-full tw:text-sm tw:text-left tw:mt-4">
        <thead class="tw:bg-gray-50 tw:text-gray-600">
          <tr>
            <th class="tw:px-4 tw:py-2">Member</th>
            <th class="tw:px-4 tw:py-2">Hours</th>
            <th class="tw:px-4 tw:py-2">Tasks</th>
            <th class="tw:px-4 tw:py-2">Status</th>
          </tr>
        </thead>
        <tbody class="tw:text-gray-700 tw:divide-y tw:divide-gray-200">
          <tr class="tw:hover:bg-gray-50">
            <td class="tw:px-4 tw:py-3 tw:flex tw:items-center tw:gap-3">
              <img src="../assets/avatar-2.png" alt="avatar" class="tw:w-9 tw:h-9 tw:rounded-full tw:object-cover" />
              <div>
                <div class="tw:font-medium">Bessie Cooper</div>
                <div class="tw:text-xs tw:text-gray-500">Product Manager</div>
              </div>
            </td>
            <td class="tw:px-4 tw:py-3 tw:font-medium tw:text-gray-700">110h : <span class="tw:text-gray-400 tw:font-normal">150h</span></td>
            <td class="tw:px-4 tw:py-3 tw:font-medium tw:text-gray-700">258</td>
            <td class="tw:px-4 tw:py-3">
              <div class="tw:w-12 tw:h-12 tw:relative">
                <svg class="tw:w-full tw:h-full tw:rotate-[-tw:90deg]" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F3F4F6" stroke-width="4" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F97316" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="50" stroke-linecap="round" />
                </svg>
                <div class="tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center tw:text-xs tw:font-medium tw:text-gray-600">50%</div>
              </div>
            </td>
          </tr>
          <tr class="tw:hover:bg-gray-50">
            <td class="tw:px-4 tw:py-3 tw:flex tw:items-center tw:gap-3">
              <img src="../assets/avatar-2.png" alt="avatar" class="tw:w-9 tw:h-9 tw:rounded-full tw:object-cover" />
              <div>
                <div class="tw:font-medium">Bessie Cooper</div>
                <div class="tw:text-xs tw:text-gray-500">Product Manager</div>
              </div>
            </td>
            <td class="tw:px-4 tw:py-3 tw:font-medium tw:text-gray-700">110h : <span class="tw:text-gray-400 tw:font-normal">150h</span></td>
            <td class="tw:px-4 tw:py-3 tw:font-medium tw:text-gray-700">258</td>
            <td class="tw:px-4 tw:py-3">
              <div class="tw:w-12 tw:h-12 tw:relative">
                <svg class="tw:w-full tw:h-full tw:rotate-[-tw:90deg]" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F3F4F6" stroke-width="4" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F97316" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="50" stroke-linecap="round" />
                </svg>
                <div class="tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center tw:text-xs tw:font-medium tw:text-gray-600">50%</div>
              </div>
            </td>
          </tr>
          <tr class="tw:hover:bg-gray-50">
            <td class="tw:px-4 tw:py-3 tw:flex tw:items-center tw:gap-3">
              <img src="../assets/avatar-2.png" alt="avatar" class="tw:w-9 tw:h-9 tw:rounded-full tw:object-cover" />
              <div>
                <div class="tw:font-medium">Bessie Cooper</div>
                <div class="tw:text-xs tw:text-gray-500">Product Manager</div>
              </div>
            </td>
            <td class="tw:px-4 tw:py-3 tw:font-medium tw:text-gray-700">110h : <span class="tw:text-gray-400 tw:font-normal">150h</span></td>
            <td class="tw:px-4 tw:py-3 tw:font-medium tw:text-gray-700">258</td>
            <td class="tw:px-4 tw:py-3">
              <div class="tw:w-12 tw:h-12 tw:relative">
                <svg class="tw:w-full tw:h-full tw:rotate-[-tw:90deg]" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F3F4F6" stroke-width="4" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F6BB11" stroke-width="4" stroke-dasharray="96" stroke-dashoffset="75.5" stroke-linecap="round" />
                </svg>
                <div class="tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center tw:text-xs tw:font-medium tw:text-gray-600">25%</div>
              </div>
            </td>
          </tr>
          <tr class="tw:hover:bg-gray-50">
            <td class="tw:px-4 tw:py-3 tw:flex tw:items-center tw:gap-3">
              <img src="../assets/avatar-2.png" alt="avatar" class="tw:w-9 tw:h-9 tw:rounded-full tw:object-cover" />
              <div>
                <div class="tw:font-medium">Bessie Cooper</div>
                <div class="tw:text-xs tw:text-gray-500">Product Manager</div>
              </div>
            </td>
            <td class="tw:px-4 tw:py-3 tw:font-medium tw:text-gray-700">110h : <span class="tw:text-gray-400 tw:font-normal">150h</span></td>
            <td class="tw:px-4 tw:py-3 tw:font-medium tw:text-gray-700">258</td>
            <td class="tw:px-4 tw:py-3">
              <div class="tw:w-12 tw:h-12 tw:relative">
                <svg class="tw:w-full tw:h-full tw:rotate-[-tw:90deg]" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F3F4F6" stroke-width="4" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F6BB11" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="25" stroke-linecap="round" />
                </svg>
                <div class="tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center tw:text-xs tw:font-medium tw:text-gray-600">75%</div>
              </div>
            </td>
          </tr>
          <tr class="tw:hover:bg-gray-50">
            <td class="tw:px-4 tw:py-3 tw:flex tw:items-center tw:gap-3">
              <img src="../assets/avatar-2.png" alt="avatar" class="tw:w-9 tw:h-9 tw:rounded-full tw:object-cover" />
              <div>
                <div class="tw:font-medium">Bessie Cooper</div>
                <div class="tw:text-xs tw:text-gray-500">Product Manager</div>
              </div>
            </td>
            <td class="tw:px-4 tw:py-3 tw:font-medium tw:text-gray-700">110h : <span class="tw:text-gray-400 tw:font-normal">150h</span></td>
            <td class="tw:px-4 tw:py-3 tw:font-medium tw:text-gray-700">258</td>
            <td class="tw:px-4 tw:py-3">
              <div class="tw:w-12 tw:h-12 tw:relative">
                <svg class="tw:w-full tw:h-full tw:rotate-[-tw:90deg]" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F3F4F6" stroke-width="4" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#10B981" stroke-width="4" stroke-dasharray="113.1" stroke-dashoffset="0" stroke-linecap="round" />
                </svg>
                <div class="tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center tw:text-xs tw:font-medium tw:text-gray-600">100%</div>
              </div>
            </td>
          </tr>
          <tr class="tw:hover:bg-gray-50">
            <td class="tw:px-4 tw:py-3 tw:flex tw:items-center tw:gap-3">
              <img src="../assets/avatar-2.png" alt="avatar" class="tw:w-9 tw:h-9 tw:rounded-full tw:object-cover" />
              <div>
                <div class="tw:font-medium">Bessie Cooper</div>
                <div class="tw:text-xs tw:text-gray-500">Product Manager</div>
              </div>
            </td>
            <td class="tw:px-4 tw:py-3 tw:font-medium tw:text-gray-700">110h : <span class="tw:text-gray-400 tw:font-normal">150h</span></td>
            <td class="tw:px-4 tw:py-3 tw:font-medium tw:text-gray-700">258</td>
            <td class="tw:px-4 tw:py-3">
              <div class="tw:w-12 tw:h-12 tw:relative">
                <svg class="tw:w-full tw:h-full tw:rotate-[-tw:90deg]" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F3F4F6" stroke-width="4" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F97316" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="50" stroke-linecap="round" />
                </svg>
                <div class="tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center tw:text-xs tw:font-medium tw:text-gray-600">50%</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="tw:flex tw:justify-between tw:items-center tw:text-xs tw:text-gray-400 tw:mt-4 tw:px-2">
        <span>Showing 5 of 25 Results</span>
        <div class="tw:flex tw:items-center tw:gap-2">
          <button class="tw:p-1 tw:hover:text-black">&lt;</button>
          <button class="tw:bg-yellow-400 tw:text-white tw:px-2 tw:py-1 tw:rounded">1</button>
          <button class="tw:hover:text-black">2</button>
          <button class="tw:hover:text-black">3</button>
          <span>...</span>
          <button class="tw:hover:text-black">10</button>
          <button class="tw:p-1 tw:hover:text-black">&gt;</button>
        </div>
      </div>
    </Card>
  </aside>
</template>
<script setup>
import Card from "../components/ui/Card.vue";
import RadialStat from "../components/charts/RadialStat.vue";
import SplineArea from "../components/charts/SplineArea.vue";
import { TrendingUp, House, Users, CirclePlus, CircleMinus, ZoomIn, EllipsisVertical, Eye, Pencil, Trash } from "lucide-vue-next";
</script>
