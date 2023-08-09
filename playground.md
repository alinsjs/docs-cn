<!--
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 00:57:06
 * @Description: Coding something
-->
---
hello: world
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>