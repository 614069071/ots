<template>
  <div class="error-page">
    <div class="error-404-inner-wrapper">
      <div class="error-404-main-wrapper">
        <div class="error-404-img-wrapper"></div>

        <p class="error-404-mes-wrapper">{{ $t("COMMON.NO_PAGE") }}</p>

        <button>{{ $t("COMMON.BACK_HOME") }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  height: 100%;
}

.error-404-inner-wrapper {
  text-align: center;
  margin: 0 auto;
  height: 100%;
  min-height: 570px;
  background-color: #fff;
  position: relative;
}

.error-404-main-wrapper {
  width: 218px;
  height: 326px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.error-404-img-wrapper {
  width: 218px;
  height: 212px;
  background-image: url(../../assets/images/e4043.png), url(../../assets/images/e4042.png), url(../../assets/images/e4041.png);
  background-position: -6px 6px, -10px 0, 5px 0;
  background-size: 218px 212px;
  background-repeat: no-repeat;
  animation: move 0.8s forwards;
}

@keyframes move {
  0% {
    background-position: -6px 6px, -10px 0, 5px 0;
  }

  100% {
    background-position: 0 0, 0 0, 0 0;
  }
}

.error-404-mes-wrapper {
  height: 20px;
  line-height: 20px;
  margin: 30px 0 24px 0;
}
</style>
