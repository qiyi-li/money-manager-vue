<template>
  <Layout class-prefix="layout">
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
        <button><Icon name="add"/></button>
        <button>7</button>
        <button >8</button>
        <button>9</button>
        <button >
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
    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="在此输入备注内容">
      </label>
    </div>
    <div class="tags">

      <div class="new">
        <button>新增标签</button>
      </div>
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </div>

  </Layout>
</template>

<script lang="ts">
  export default {
    name: 'money',
  };
</script>

<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>

<!--suppress SassScssResolvedByNameOnly -->
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
          border-radius:50%;
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

  .types {
    background: rgb(241, 244, 245);
    display: flex;
    text-align: center;
    font-size: 24px;

    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: $color-highlight;

      }

      &.selected {
        color: $color-highlight;
      }

    }
  }

  .notes {
    background: #fdfdfd;
    font-size: 14px;
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }

  .tags {
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;

    > .current {
      display: flex;
      flex-wrap: wrap;
      overflow: auto;

      > li {
        background: #d9d9d9;
        height: 24px;
        line-height: 24px;
        border-radius: 12px;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;
      }
    }

    > .new {
      padding-top: 16px;

      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 3px;;
      }
    }

  }
</style>