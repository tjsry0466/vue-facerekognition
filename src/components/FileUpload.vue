<template>
  <form class="form-inline">
    <input
       id="input-filename"
       type="text"
       class="form-control mr-sm-2"
       placeholder="Upload Image"
       v-model="filename"
       @dragover.prevent
       @dragenter.prevent
       @drop.prevent="onDrop">
    <div class="input-group-append">
      
      <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
      <span class="btn btn-outline-dark my-2 my-sm-0" @click="onClickFile"><i class="fa fa-paperclip">
        </i></span>
        <!-- <button
          class="btn btn-outline-success my-2 my-sm-0"
          @click="onClickUpload">Upload</button> -->
    </div>
    <input type=file class="file-input form-control mr-sm-2" accept="image/*" ref="fileInput" @change="onFileChange" style="display: none;">
  </div>
  <!-- <div v-show="imageSrc" class="upload-image">
    <img :src="imageSrc">
  </div> -->
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: "FileUpload",
  data () {
      return {
        filename: '',
        imageSrc: '',
        imageData: null,
        files: [],
      }
  },
  methods: {
    uploadImage(file) {
        

var frm = new FormData(); 
        frm.append("img", file); 
        axios.post('http://54.180.76.58:3000/api/face', 
        frm, 
        { headers: { 'Content-Type': 'multipart/form-data' } }) 
        .then((response) => { // 응답 처리
        console.log('업로드 응답');
        console.log(response);
        console.log(response.file);
         }) .catch((error) => { // 예외 처리 
         })
    },
    onDrop (event) {
      this.inputImageFile(event.dataTransfer.files)
    },
    onClickFile(event) {
      this.$refs.fileInput.click()
      // __doPostBack('', null);
    },
    onFileChange(event) {
      this.inputImageFile(event.target.files)
    },
    inputImageFile (files) {
      if (files.length) {
          this.files = files[0];
        let file = files[0]
        if (!/^image\//.test(file.type)) {
          alert('이미지 파일만 등록이 가능합니다')
          return false
        }
        this.filename = file.name.slice(0, 5)+"~"+ file.name.slice(file.name.length-4, file.name.length)+ " 이미지 업로드 완료";
        this.preview(file);
        this.uploadImage(file);
      }
    },
    onClickUpload () {
      this.uploadImage(this.files[0]);
    },
    preview (file) {
      if (typeof file === 'string') {
        this.imageSrc = file
      } else {  
        let vm = this
        let reader = new FileReader()
        reader.onload = () => {
          vm.imageSrc = reader.result
        }
        reader.readAsDataURL(file)
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#input-filename {
  width: 240px;
}
.file-input {
    display: none;
}
.upload-image {
    padding-top: 1rem;
    width: 200px;
    height: 200px;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
