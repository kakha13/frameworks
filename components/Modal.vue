<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
    focusThis(){
        this.$emit("focus");
    }
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal modal-fullscreen-sm-down"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <div class=" modal-dialog modal-lg modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header"> This is the default tile! </slot>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                @click="close"
                aria-label="Close modal"
              ></button>
            </div>
            <div class="modal-body">
              <slot name="body"> This is the default body!</slot>
            </div>
            <div class="modal-footer">
              <slot name="footer"> </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  background: #00000059;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active,
.modal {
  display: block;
  transition: opacity 0.5s ease;
}
.modal-content {
    background-color:#f5f6f7;
}

@media (max-width: 576px) { 
    .modal-fullscreen-sm-down .modal-dialog {
        margin:0;
        height: 100%;
    } 
}
.modal-body {
    min-height: 300px;
}

.modal-footer {
    border: 0;
    padding: 0;
}
</style>