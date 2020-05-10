<template>
  <div class="numberPad">
    <div class="output">100</div>
    <div class="buttons  ">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button class="ac">AC</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>
        <Icon name="add"/>
      </button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>
        <Icon name="reduce" class="xxx"/>
      </button>
      <button class="ok">OK</button>
      <button>.</button>
      <button class="zero">0</button>
      <button>
        <Icon name="delete"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'NumberPad'
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";

  .numberPad {
    margin-bottom: 16px;

    .output {
      @extend %clearFix;
      @extend %innerShadow;
      font-size: 36px;
      font-family: Consolas, monospace;
      padding: 10px 0;
      margin: 0 16px;
      text-align: right;
      /*border-bottom: 1px solid #edeff0;*/
    }

    .buttons {
      @extend %clearFix;

      > button {
        width: 25%;
        height: 64px;
        float: left;
        border: none;
        background: transparent;
        font-size: 20px;

        &.ok {
          height: 64px;
          width: 64px;
          margin-right: 16px;
          float: right;
          background-color: $color-highlight;
          border-radius: 50%;
          color: white;

        }

        &.zero {
          width: 25%;
        }

        &.ac {
          color: $color-highlight;
          font-size: 1.3em;
          font-weight: 500;
        }

        > .icon {
          height: 1.3em;
          width: 1.3em;
          color: $color-highlight;
        }

      }
    }
  }
</style>