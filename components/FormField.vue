<script lang="ts" setup>
import ExclamationCircleIcon from "@heroicons/vue/20/solid/ExclamationCircleIcon";
import { css } from "~/styled-system/css";
import { hstack } from "~/styled-system/patterns";

type OnInputHandler = (payload: Event) => void;
type OnBlurHandler = (e: FocusEvent) => void;

const props = defineProps({
  fieldRef: {
    type: Object as PropType<HTMLInputElement | HTMLTextAreaElement>,
    required: true,
  },
  defaultValue: {
    type: String,
    default: "",
  },
});

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

defineSlots<{
  default(props: {
    value: string;
    onInput: OnInputHandler;
    onBlur: OnBlurHandler;
    class: string;
  }): void;
}>();

const value = ref("");

onMounted(() => {
  console.log("🚀 ~ onMounted ~ props.defaultValue:", props.defaultValue);
  if (props.defaultValue) {
    value.value = props.defaultValue;
  }
});

const updateValue: OnInputHandler = (event) => {
  value.value = (event.target as HTMLInputElement).value;
};

const errorMessage = ref<string | null>(null);

const onBlur: OnBlurHandler = () => {
  if (!value.value) {
    errorMessage.value = "Can't be empty";
    return;
  }

  if (props.fieldRef.type === "email" && !value.value.match(EMAIL_REGEX)) {
    errorMessage.value = "Not a valid email";
    return;
  }

  errorMessage.value = null;
};

const slotStyles = css({
  width: "full",
});
</script>
<template>
  <div data-id="form-field" :class="css({ position: 'relative' })">
    <slot
      :value="value ?? ''"
      :class="slotStyles"
      :on-input="updateValue"
      :on-blur="onBlur"
    />
    <div
      v-if="errorMessage"
      data-id="form-field-error"
      :class="
        hstack({
          position: 'absolute',
          top: '0',
          right: '2',
          color: 'white',
          fontSize: 'lg',
          gap: '2',
        })
      "
    >
      <span :class="css({ fontSize: 'sm' })"> {{ errorMessage }} </span>
      <ExclamationCircleIcon :class="css({ inlineSize: '20px' })" />
    </div>
  </div>
</template>
