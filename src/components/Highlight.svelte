<script>
export let icon, highlightClass

const iconsArr = icon ? icon.split(',') : []
</script>

<div class="highlight">
  {#each iconsArr as iconName, i}
    <i class="iconfont icon-{iconName}"></i>
  {/each}
  <span class="{highlightClass}"><slot></slot></span>
</div>

<style lang="scss">
.highlight {
  display: inline;
  margin: 0 0.16em;
  &:hover {
    span {
      box-shadow: inset 0 -0.7em rgba(144, 144, 144, 0.5);
      &.moegi {
        box-shadow: inset 0 -0.7em rgba(134, 184, 27, 0.5);
      }
      &.blue {
        box-shadow: inset 0 -0.7em rgba(83, 193, 252, 0.5);
      }
      &.orange {
        box-shadow: inset 0 -0.7em rgba(252, 145, 83, 0.5);
      }
    }
    .iconfont {
      color: #000000;
      &.icon-apple {
        color: #000000;
        @media (prefers-color-scheme: dark) {
          color: #ffffff;
        }
      }
      &.icon-h5 {
        color: #e44d27;
      }
      &.icon-didi {
        color: #fc9153;
      }
    }
  }
}
.iconfont {
  margin-right: 0.04em;
  font-size: 0.84em;
  transition: color .3s ease;
}
span {
  margin-left: -0.24em;
  transition: box-shadow .3s ease;
  box-shadow: inset 0 -0.2em rgba(144, 144, 144, 0.5);
  &.moegi {
    box-shadow: inset 0 -0.2em rgba(134, 184, 27, 0.5);
  }
  &.blue {
    box-shadow: inset 0 -0.2em rgba(83, 193, 252, 0.5);
  }
  &.orange {
    box-shadow: inset 0 -0.2em rgba(252, 145, 83, 0.5);
  }
}
</style>