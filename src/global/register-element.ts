import { App } from 'vue'

import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
