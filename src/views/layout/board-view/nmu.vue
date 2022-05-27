<template>
  <div class="num-cps-wrapper cps-wrapper">
    <div class="board-table-container">
      <table class="board-table" border="1">
        <thead>
          <tr>
            <td>SFP {{ $t("COMMON.PORT") }}</td>
            <td>SFP1</td>
            <td>SFP2</td>
            <td>SFP3</td>
          </tr>
        </thead>

        <tr>
          <td>{{ $t("BOARD_INFO.IN_STATE") }}</td>
          <td>{{ infoData.sfp1.online_status ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
          <td>{{ infoData.sfp2.online_status ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
          <td>{{ infoData.sfp3.online_status ? $t("COMMON.IN_OFFICE") : $t("COMMON.DISLOCATION") }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.LINK_STATE") }}</td>
          <td>{{ infoData.sfp1.online_status ? (infoData.sfp1.link_status ? "UP" : "DOWN") : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? (infoData.sfp2.link_status ? "UP" : "DOWN") : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? (infoData.sfp3.link_status ? "UP" : "DOWN") : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.SPEED") }}（Mbps）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.speed_Gbps : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.speed_Gbps : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.speed_Gbps : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.WAVE_LEN") }}（nm）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.wave_len : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.wave_len : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.wave_len : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.DISTANCE") }}（km）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.tx_distanst : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.tx_distanst : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.tx_distanst : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.TRANS_OPTICAL_POWER") }}（dBm）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.launch_power : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.launch_power : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.launch_power : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.RECE_OPTICAL_POWER") }}（dBm）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.rcv_power : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.rcv_power : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.rcv_power : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.VOLTAGE") }}（V）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.voltage : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.voltage : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.voltage : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.AMPERE") }}（mA）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.current : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.current : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.current : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.TEMPERATURE") }}（℃）</td>
          <td>{{ infoData.sfp1.online_status ? infoData.sfp1.temp : "NA" }}</td>
          <td>{{ infoData.sfp2.online_status ? infoData.sfp2.temp : "NA" }}</td>
          <td>{{ infoData.sfp3.online_status ? infoData.sfp3.temp : "NA" }}</td>
        </tr>
      </table>

      <table class="board-table" style="margin-top: 10px" border="1">
        <tr>
          <td>ETH {{ $t("COMMON.PORT") }}</td>
          <td>ETH1</td>
          <td>ETH2</td>
          <td>ETH3</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.LINK_STATE") }}</td>
          <td>{{ infoData.eth1.eth_status ? "UP" : "DOWN" }}</td>
          <td>{{ infoData.eth2.eth_status ? "UP" : "DOWN" }}</td>
          <td>{{ infoData.eth3.eth_status ? "UP" : "DOWN" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.SPEED") }}（Mbps）</td>
          <td>{{ infoData.eth1.eth_status ? infoData.eth1.ethspeed : "NA" }}</td>
          <td>{{ infoData.eth2.eth_status ? infoData.eth2.ethspeed : "NA" }}</td>
          <td>{{ infoData.eth3.eth_status ? infoData.eth3.ethspeed : "NA" }}</td>
        </tr>
        <tr>
          <td>{{ $t("BOARD_INFO.DUPLEX") }}</td>
          <td>{{ infoData.eth1.eth_status ? (infoData.eth1.full_status ? $t("SUP.FULL_DUPLEXT") : $t("SUP.HALF_DUPLEXT")) : "NA" }}</td>
          <td>{{ infoData.eth2.eth_status ? (infoData.eth2.full_status ? $t("SUP.FULL_DUPLEXT") : $t("SUP.HALF_DUPLEXT")) : "NA" }}</td>
          <td>{{ infoData.eth3.eth_status ? (infoData.eth3.full_status ? $t("SUP.FULL_DUPLEXT") : $t("SUP.HALF_DUPLEXT")) : "NA" }}</td>
        </tr>
      </table>
    </div>

    <div class="board-change-btns">
      <button class="def-btn" :disabled="refreshInfoDisabled" @click="refreshGetInfo">{{ $t("COMMON.REFRESH") }}</button>
    </div>
  </div>
</template>

<script>
import mixins from "@/utils/mixins";

export default {
  name: "nmu",
  mixins: [mixins],
  data() {
    return {
      infoData: {
        sfp1: {
          online_status: 0,
          link_status: 0,
          speed_Gbps: "",
          wave_len: "",
          tx_distanst: "",
          launch_power: "",
          rcv_power: "",
          voltage: "",
          current: "",
          temp: "",
        },
        sfp2: {
          online_status: 0,
          link_status: 0,
          speed_Gbps: "",
          wave_len: "",
          tx_distanst: "",
          launch_power: "",
          rcv_power: "",
          voltage: "",
          current: "",
          temp: "",
        },
        sfp3: {
          online_status: 0,
          link_status: 0,
          speed_Gbps: "",
          wave_len: "",
          tx_distanst: "",
          launch_power: "",
          rcv_power: "",
          voltage: "",
          current: "",
          temp: "",
        },
        eth1: {
          eth_status: 0,
          full_status: 0,
          ethspeed: 0,
        },
        eth2: {
          eth_status: 0,
          full_status: 0,
          ethspeed: 0,
        },
        eth3: {
          eth_status: 0,
          full_status: 0,
          ethspeed: 0,
        },
      },
    };
  },
};
</script>

<style scoped></style>
