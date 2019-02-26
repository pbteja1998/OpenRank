<template>
    <div class="mb-3 mt-0 md-form input-group">
        <div class="input-group-prepend">
            <span class="input-group-text md-addon">
                <slot name="prepend-text"></slot>
            </span>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'prependInput'
    }
</script>