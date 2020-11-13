<template>
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div
        class="image-flip"
        ontouchstart="this.classList.toggle('hover');"
        >
        <div class="mainflip">
            <div class="frontside">
            <div class="card">
                <div class="card-body text-center">
                <p>
                    <img
                    class="img-fluid"
                    :src="imageURL"
                    @error="$event.target.src='https://facecog-bucket.s3.ap-northeast-2.amazonaws.com/person.png'"
                    alt="card image"
                    />
                </p>
                <h5 class="card-title">
                    {{imageName}}
                    <span
                    class="badge badge-pill badge-success"
                    style="font-size: 11px" v-if="isGroup === true"
                    >분류</span
                    >
                    <span
                    class="badge badge-pill badge-danger"
                    style="font-size: 11px" v-else
                    >미분류</span
                    >
                </h5>
                <div class="attr-list d-flex">
                    <div class="attr-title font-weight-bold w-50">
                    나이
                    </div>
                    <div class="attr-content">{{ageRangeLow}} ~ {{ageRangeHigh}}</div>
                </div>
                <div class="attr-list d-flex">
                    <div class="attr-title font-weight-bold w-50">
                    성별
                    </div>
                    <div class="attr-content">{{gender}}</div>
                </div>
                <div class="attr-list d-flex">
                    <div class="attr-title font-weight-bold w-50">
                    감정
                    </div>
                    <div class="attr-content">{{feeling}}</div>
                </div>
                <div class="attr-list d-flex">
                    <div class="attr-title font-weight-bold w-50">
                    웃음
                    </div>
                    <div class="attr-content">{{smile}}</div>
                </div>
                <div class="attr-list d-flex">
                    <div class="attr-title font-weight-bold w-50">
                    안경
                    </div>
                    <div class="attr-content">{{glass}}</div>
                </div>
                <div class="attr-list d-flex">
                    <div class="attr-title font-weight-bold w-50">
                    신뢰도
                    </div>
                    <div class="attr-content">{{confidence}}</div>
                </div>
                </div>
            </div>
            </div>
            <div class="backside">
            <div class="card position-relative">
                <div
                class="card-body text-center mt-4"
                style="padding: 0.5rem"
                >
                <!-- <font-awesome-icon :icon="['far', 'fa-plus-square', 'plus-btn']"/> -->
                <i class="far fa-plus-square plus-btn"></i>
                <h2 class="card-title">{{imageName}}</h2>
                <h6 class="card-text">
                    {{faceID}}
                </h6>
                <div class="attr-list d-flex pt-1">
                    <div class="attr-title font-weight-bold w-50">
                    나이
                    </div>
                    <div class="attr-content">{{ageRangeLow}} ~ {{ageRangeHigh}}</div>
                </div>
                <div class="attr-list d-flex pt-1">
                    <div class="attr-title font-weight-bold w-50">
                    성별
                    </div>
                    <div class="attr-content">{{gender}}</div>
                </div>
                <div class="attr-list d-flex pt-1">
                    <div class="attr-title font-weight-bold w-50">
                    감정
                    </div>
                    <div class="attr-content">{{feeling}}</div>
                </div>
                <div class="attr-list d-flex pt-1">
                    <div class="attr-title font-weight-bold w-50">
                    웃음
                    </div>
                    <div class="attr-content">{{smile}}</div>
                </div>
                <div class="attr-list d-flex pt-1">
                    <div class="attr-title font-weight-bold w-50">
                    안경
                    </div>
                    <div class="attr-content">{{glass}}</div>
                </div>
                <div class="attr-list d-flex pt-1">
                    <div class="attr-title font-weight-bold w-50">
                    신뢰도
                    </div>
                    <div class="attr-content">{{confidence}}</div>
                </div>
                <div class="text-muted mt-2 border-top mt-4">
                    2 days ago
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Card",
  props: ['faceID', 'imageURL', 'imageName', 'isGroup', 'ageRangeLow', 'ageRangeHigh', 'gender', 'feeling', 'smile', 'glass', 'confidence'],
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-flip:hover .backside,
.image-flip.hover .backside {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
  border-radius: 0.25rem;
}

.image-flip:hover .frontside,
.image-flip.hover .frontside {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.mainflip {
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -ms-transition: 1s;
  -moz-transition: 1s;
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
  position: relative;
}

.frontside {
  position: relative;
  -webkit-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  z-index: 2;
  margin-bottom: 30px;
}

.backside {
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
  box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}

.frontside,
.backside {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 1s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 1s;
  -moz-transform-style: preserve-3d;
  -o-transition: 1s;
  -o-transform-style: preserve-3d;
  -ms-transition: 1s;
  -ms-transform-style: preserve-3d;
  transition: 1s;
  transform-style: preserve-3d;
}

.frontside .card,
.backside .card {
  min-height: 312px;
}

.backside .card a {
  font-size: 18px;
  color: #007b5e !important;
}

.frontside .card .card-title,
.backside .card .card-title {
  color: #007b5e !important;
}

.frontside .card .card-body img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.plus-btn {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  padding: 8px;
}
</style>
