<template>
  <div>
    <video width="320" height="360" controls>
      <slot></slot>
    </video>
  </div>
</template>

<style scoped>
video {
  border: 0;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  background: #dcdbdc;
  border-radius: 8px 8px 0 0;
}
video::-webkit-media-controls-panel {
  box-shadow: none !important;
  background-image: linear-gradient(transparent, #121c28) !important;
}
</style>
