<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons  ">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button class="ac" @click="clear">AC</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="add" value="+" class="icon">
        <Icon name="add"/>
      </button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="reduce" class="icon">
        <Icon name="reduce"/>
      </button>
      <button class="ok" @click="ok ">OK</button>
      <button @click="inputContent">.</button>
      <button @click="inputContent">0</button>
      <button @click="remove">
        <Icon name="delete"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {
    output = '0';
    result=0
    inputContent(event: MouseEvent) {
      const button = (event.target as HTMLButtonElement); //强制指定类型
      const input = button.textContent as string;
      // const input=button.textContent!
      if (this.output.length === 16) {
        return;
      }
      if (this.result !== 0) {
        this.result = 0;
        this.output = '';
      } else if (this.output === '0') {
        if ('0123456789'.indexOf(input) >= 0) {
          this.output = input;
        } else {
          this.output += input;
        }
        return;
      }
      if (this.output.indexOf('.') >= 0 && input === '.') {
        return;
      }
      this.output += input;
    }

    remove() {
      if (this.output.length === 1) {
        this.output = '0';
      } else {
        this.output = this.output.slice(0, -1);
      }

    }

    clear() {
      this.output = '0';
    }

    add() {
      this.output+='+'
    }

    reduce() {
      this.output+='-'
    }
    ok() {
      if (this.output[this.output.length - 1] === '+' || this.output[this.output.length - 1] === '-') {
        window.alert('计算错误');
        this.output = '0';
        return
      } else {
        this.result = eval(this.output);
        this.output = this.result.toString();
      }
      this.$emit('update:value', this.result);
      this.$emit('submit', this.result);
      this.output = '0';

    }


  }

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
      height: 72px;
      /*border-bottom: 1px solid #edeff0;*/
    }

    .buttons {
      @extend %clearFix;
      padding-right: calc(25% - 70px);

      > button {
        width: 64px;
        height: 64px;
        margin-left: calc(25% - 64px);

        float: left;
        border: none;
        background: transparent;
        font-size: 20px;


      }

      .ok {
        height: 64px;

        float: right;
        background-color: $color-highlight;
        border-radius: 50%;
        color: white;

      }

      .ac {
        color: $color-highlight;
        font-size: 1.4em;
        font-weight: 500;
      }

      > .icon {
        color: $color-highlight;
        font-size: 1.4em;
      }


      button:not(.ok):active {
        @keyframes move {
          from {
            background: rgba(0, 0, 0, 0);
            font-weight: 500;
          }
          to {
            background-color: rgba(0, 0, 0, 0.1);
            font-weight: 700;
          }
        }
        animation: move .3s linear;
        border-radius: 50%;
      }
    }
  }
</style>