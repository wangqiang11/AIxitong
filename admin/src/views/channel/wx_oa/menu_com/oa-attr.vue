<script lang="ts" setup>
import { useMenuOa } from './useMenuOa'
import oaMenuForm from './oa-menu-form.vue'
import oaMenuFormEdit from './oa-menu-form-edit.vue'
import Draggable from "vuedraggable"
const menuRef = shallowRef()

const {
    menuList,
    menuIndex,
    handleAddSubMenu,
    handleEditSubMenu,
    handleDelMenu,
    handleDelSubMenu
} = useMenuOa(menuRef)
</script>

<template>
    <!-- Attr -->
    <template v-for="(attrItem, attrIndex) in menuList" :key="attrIndex">
        <div class="flex-1 oa-attr min-w-0" v-show="attrIndex === menuIndex">
            <div class="text-base oa-attr-title">菜单配置</div>

            <del-wrap @close="handleDelMenu(menuIndex)">
                <div class="flex items-center w-full p-4 mt-4 rounded bg-fill-light">
                    <oa-menu-form
                        ref="menuRef"
                        modular="master"
                        v-model:name="attrItem.name"
                        v-model:menuType="attrItem.has_menu"
                        v-model:visitType="attrItem.type"
                        v-model:url="attrItem.url"
                        v-model:appId="attrItem.appid"
                        v-model:pagePath="attrItem.pagepath"
                    >
                        <div class="flex-1">
                            <!-- 编辑子菜单 -->
                          <Draggable
                              class="draggable"
                              v-model="attrItem.sub_button"
                              animation="300"
                              handle=".drag-move"

                              tag="ul"
                          >
                            <template v-slot:item="{ element:subItem, index:subIndex }">

                                <li
                                    class="flex items-center"
                                    style="padding: 8px"
                                    :key="subIndex"
                                >
                                  <div class="drag-move cursor-move mr-[10px] flex">
                                    <icon name="el-icon-Rank" size="18" />
                                  </div>
                                  <span class="mr-auto">{{ subItem.name }}</span>
                                  <!-- 编辑子菜单 -->
                                  <oa-menu-form-edit
                                      modular="edit"
                                      :subItem="subItem"
                                      @edit="handleEditSubMenu($event, subIndex)"
                                  >
                                    <el-button link>
                                      <el-icon><EditPen /></el-icon>
                                    </el-button>
                                  </oa-menu-form-edit>

                                  <!-- 删除子菜单 -->
                                  <popup @confirm="handleDelSubMenu(menuIndex, subIndex)">
                                    是否删除当前子菜单？
                                    <template #trigger>
                                      <el-button link>
                                        <el-icon class="ml-5"><Delete /></el-icon>
                                      </el-button>
                                    </template>
                                  </popup>
                                </li>
                            </template>
                          </Draggable>

                            <!-- 新增子菜单 -->
                            <oa-menu-form-edit modular="add" @add="handleAddSubMenu">
                                <el-button
                                    type="primary"
                                    link
                                    :disabled="attrItem.sub_button.length >= 5"
                                >
                                    添加子菜单({{ attrItem.sub_button.length }}/5)
                                </el-button>
                            </oa-menu-form-edit>
                        </div>
                    </oa-menu-form>
                </div>
            </del-wrap>
        </div>
    </template>
</template>

<style lang="scss" scoped>
.oa-attr {
}
</style>
