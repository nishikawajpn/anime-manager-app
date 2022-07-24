<template>
  <div>
    <input type="file" @change="fileInput" ref="fileInput">
  </div>
</template>

<script>
import { getStorage, ref, uploadBytes } from "firebase/storage";

export default {
  methods: {
    fileInput() {
      const file = this.$refs.fileInput.files[0]
      const filePath = `/user/${file.name}`
      
      const storage = getStorage();
      const storageRef = ref(storage, filePath);

      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot);
      });
    }
  }
}
</script>

<style>

</style>