<template>
  <div class="board-md16sfa-view-wrapper board-item-view-wrapper">
    <div class="board-item-name"><span>MD16SFA</span></div>

    <div class="board-link-wrapper">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span></div>
      <div class="board-light"><span class="k-name">LINK</span><span class="k-item" :class="light[2] ? 'suc' : 'run-link'"></span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item" :class="light[3] ? 'war' : 'suc'"></span></div>
    </div>

    <div class="board-console-wrapper"><span>Console</span></div>

    <div class="board-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div>

    <div class="tx-rx-wrapper">
      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>Line</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i></i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i></i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i></i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>M21</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D29</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M22</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D30</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>M23</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D31</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M24</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D32</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>M25</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D33</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M26</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D34</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>M27</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D35</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M28</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>D36</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { decimalToBinary } from "@/utils";

export default {
  name: "board-md16sfa",
  props: ["data"],
  computed: {
    light() {
      return decimalToBinary(this.data.light_status);
    },
  },
};
</script>

<style lang="scss">
.board-md16sfa-view-wrapper {
  .board-link-wrapper {
    left: 14px;
  }
  .tx-rx-wrapper {
    left: -30px;
  }
}
</style>
