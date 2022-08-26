<script lang="ts" setup>
import IconMdiClose from "~icons/mdi/close";
import IconMdiTag from "~icons/mdi/tag";
withDefaults(
  defineProps<{
    visible?: boolean;
    title?: string;
    width?: number;
    fullscreen?: boolean;
    bodyClass?: string[];
  }>(),
  {
    visible: false,
    width: 500,
    fullscreen: false,
  }
);

const emit = defineEmits<{
  (event: "update:visible", value: boolean): void;
  (event: "close"): void;
}>();

function handleClose() {
  emit("update:visible", false);
  emit("close");
}
</script>
<template>
  <Teleport to="body">
    <div
      v-show="visible"
      aria-modal="true"
      class="fixed top-0 left-0 z-[9999999999] flex h-full w-full flex-row items-center justify-center"
      role="dialog"
      tabindex="0"
      style="display: none"
      @keyup.esc="handleClose"
    >
      <div
        v-show="visible"
        enter-active-class="ease-out duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          class="absolute top-0 left-0 h-full w-full flex-none bg-gray-500 bg-opacity-75 transition-opacity"
          @click="handleClose"
        />
      </div>
      <div
        v-show="visible"
        enter-active-class="ease-out duration-200"
        enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="ease-in duration-100"
        leave-from-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div
          class="relative flex max-w-3xl transform flex-col items-stretch rounded bg-white shadow-xl transition-all"
          style="width: calc(100vw - 20px); max-height: calc(100vh - 20px)"
        >
          <div class="flex justify-between border-b">
            <div
              class="modal-header-title flex items-center self-center px-[16px] py-[12px] text-base font-bold"
            >
              <span class="mr-2">搜索</span>
              <i
                x-show="searching"
                class="iconify h-4 w-4 animate-spin"
                data-icon="mdi:loading"
              ></i>
            </div>
            <div class="flex h-full flex-row self-center">
              <div
                class="mx-[16px] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-50 hover:bg-gray-200"
                @click="handleClose"
              >
                <IconMdiClose class="h-4 w-4" />
              </div>
            </div>
          </div>
          <div
            class="break-word flex-1 overflow-y-auto overflow-x-hidden px-[16px] py-[12px]"
          >
            <div>
              <input
                type="text"
                x-model="keyword"
                class="block w-full rounded border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                placeholder="输入关键字搜索"
              />
            </div>
            <div x-show="!keyword" id="search-preset" class="mt-8">
              <div class="mb-3 flex flex-row items-center">
                <IconMdiTag class="h-5 w-5" />
                <span class="ml-2">标签</span>
              </div>
              <div class="flex flex-row flex-wrap gap-2">
                <a
                  th:each="tag : ${tagFinder.listAll()}"
                  th:href="@{${tag.permalink}}"
                  class="text-sm text-black/80 hover:font-medium hover:text-black hover:underline"
                  th:text="${tag.name}（${tag.posts!}）"
                >
                </a>
              </div>
            </div>
            <!-- <div x-show="!searching && posts.length>0" class="transition-all">
            <template x-for="post in posts">
              <div
                class="post animated fadeInDown"
                style="margin-left: 0; margin-right: 0"
              >
                <div class="post-title">
                  <h3 class="font-medium">
                    <a x-bind:href="post.url" x-text="post.title"></a>
                  </h3>
                </div>
                <div class="post-content text-sm text-black/50">
                  <p class="py-2.5" x-text="post.content"></p>
                </div>
              </div>
            </template>
          </div>
          <div
            x-show="keyword && !searching && posts.length<=0"
            class="transition-all"
          >
            <span>没有搜索到相关文章</span>
          </div>
          --></div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
