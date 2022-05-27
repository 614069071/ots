<template>
  <div class="board-m40-view-wrapper composite board-item-view-wrapper">
    <div class="board-item-name"><span>M40</span></div>

    <div class="board-link-wrapper m40-link-wrapper">
      <div class="board-light"><span class="k-name">PWR</span><span class="k-item suc"></span></div>
      <div class="board-light"><span class="k-name">RUN</span><span class="k-item run-los"></span></div>
      <div class="board-light"><span class="k-name">LINK</span><span class="k-item" :class="light[2] ? 'suc' : 'run-link'"></span></div>
      <div class="board-light"><span class="k-name">STAT</span><span class="k-item" :class="light[3] ? 'war' : 'suc'"></span></div>
    </div>

    <!-- <div class="board-console-wrapper"><span>Console</span></div>

    <div class="board-rst-wrapper">
      <div class="rst-name">RST</div>
      <div class="rst-circle"></div>
    </div> -->

    <div class="tx-rx-wrapper tx-rx-m40-wrapper1">
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
          <i>M22</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M23</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M24</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>M25</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M26</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M27</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M28</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>M29</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M30</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M31</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M32</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>M33</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M34</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M35</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M36</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>M37</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M38</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M39</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M40</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>
    </div>

    <div class="tx-rx-wrapper tx-rx-m40-wrapper2">
      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>M41</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M42</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M43</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M44</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>M45</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M46</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M47</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M48</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>M49</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M50</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M51</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M52</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>M53</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M54</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M55</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M56</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>

      <div class="tx-rx-inner-item">
        <div class="tx-rx-item">
          <i>M57</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M58</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M59</i>
          <div class="tx-rx-item-main"></div>
        </div>
        <div class="tx-rx-item">
          <i>M60</i>
          <div class="tx-rx-item-main"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { decimalToBinary } from "@/utils";

export default {
  name: "board-m40",
  props: ["data"],
  computed: {
    light() {
      return decimalToBinary(this.data.light_status);
    },
  },
};
</script>

<style lang="scss">
.board-m40-view-wrapper {
  .m40-link-wrapper {
    top: 70px;
    left: 14px;
  }
  .tx-rx-m40-wrapper1 {
    top: 5px;
    left: -132px;
  }

  .tx-rx-m40-wrapper2 {
    top: 55px;
    left: -30px;
  }
}
</style>
