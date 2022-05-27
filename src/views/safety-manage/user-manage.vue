<template>
  <div>
    <div class="inner-container-title">
      {{ $t("USER_MANAGE.USER_LIST") }} <button class="button-refresh-board-list" @click="getUserList">{{ $t("COMMON.REFRESH") }}</button>
    </div>

    <el-table :data="dataTable" border size="mini" tooltip-effect="dark" style="width: 100%">
      <!-- <el-table-column type="index" label="序号" width="50"> </el-table-column> -->
      <el-table-column prop="username" :label="$t('USER_MANAGE.USER_NAME')"></el-table-column>
      <el-table-column prop="privilege" :label="$t('USER_MANAGE.USER_LEVEL')">
        <template v-slot="{ row }">
          {{ row.privilege | mapRoleName }}
        </template>
      </el-table-column>
      <el-table-column prop="create_time" :label="$t('USER_MANAGE.CREATE_TIME')">
        <template v-slot="{ row }">
          {{ (row.create_time * 1000) | formatTime }}
        </template>
      </el-table-column>
      <el-table-column :label="$t('COMMON.CONTROL')" width="160">
        <template v-slot="{ row }">
          <button class="def-btn" @click="modifyItem(row.username)" v-permission="'control'">{{ $t("COMMON.CHANGE") }}</button>
          <button class="def-btn" v-if="row.privilege == '0'" @click="delItem(row.username)" v-permission="'control'">{{ $t("COMMON.DELETE") }}</button>
        </template>
      </el-table-column>
    </el-table>

    <div class="add-user-config-wrapper" v-show="isAddUser">
      <input class="def-input" type="text" v-model="dataForm.username" :placeholder="$t('USER_MANAGE.INPUT_USER_NAME')" />
      <input class="def-input" type="text" v-model="dataForm.password" :placeholder="$t('USER_MANAGE.INPUT_USER_PASSWORD')" />
      <input class="def-input" type="text" v-model="dataForm.repassword" :placeholder="$t('USER_MANAGE.INPUT_USER_PASSWORD')" />
      <!-- <el-select size="small" :placeholder="$t('USER_MANAGE.INPUT_USER_LEVEL')" v-model="dataForm.name3">
        <el-option :label="$t('USER_MANAGE.ADMIN')" value="1"></el-option>
        <el-option :label="$t('USER_MANAGE.AVERAGE')" value="0"></el-option>
      </el-select> -->

      <div>
        <button class="def-btn" @click="submitAddFrom">{{ $t("COMMON.SUBMIT") }}</button>
        <button class="def-btn" @click="cancelAddFrom">{{ $t("COMMON.CANCEL") }}</button>
      </div>
    </div>

    <div class="user-btns-wrapper">
      <button class="def-btn" @click="addUserItem" v-permission="'delete'">{{ $t("USER_MANAGE.ADD_USER") }}</button>
    </div>

    <div class="modify-pupur-wrapper" v-show="modifyVisible">
      <div class="modify-title">{{ $t("USER_MANAGE.NEW_PASS") }}</div>
      <div class="modify-input"><input v-model="modifyForm.password1" type="password" maxlength="20" /></div>
      <div class="modify-title">{{ $t("USER_MANAGE.RE_PASS") }}</div>
      <div class="modify-input"><input v-model="modifyForm.password2" type="password" maxlength="20" /></div>
      <div class="confirm-controls">
        <button class="def-btn" @click="modifyCancel">{{ $t("COMMON.CANCEL") }}</button>
        <button class="def-btn" @click="modifySubmit">{{ $t("COMMON.SUBMIT") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { i18nToKey } from "@/locale";

export default {
  name: "user-manage",
  data() {
    return {
      dataForm: {
        boardname: "NMU",
        username: "",
        password: "",
        repassword: "",
        type: "add_user",
      },
      isAddUser: false,
      dataTable: [
        {
          name1: "webadmin",
          name2: "****",
          name3: "管理员",
          name4: "2020-2-10",
        },
      ],
      modifyForm: {
        password1: "",
        password2: "",
      },
      modifyVisible: false,
      modifyName: "",
    };
  },
  filters: {
    mapRoleName(v) {
      return [i18nToKey("SUP.AVERAGE"), i18nToKey("SUP.PRODUCER"), i18nToKey("SUP.ADMIN")][v] || v;
    },
  },
  created() {
    this.getUserList();
  },
  methods: {
    addUserItem() {
      this.isAddUser = true;
    },
    getUserList() {
      this.dataTable = [];

      const data = { otn2000: { boardname: "NMU", type: "get_userlist" } };

      this.$http
        .post(data)
        .then(({ otn2000_ack: { userlist = [] } }) => {
          this.dataTable = userlist;
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitAddFrom() {
      const { repassword, ...other } = this.dataForm;

      if (repassword !== other.password || !other.username) {
        return alert(this.$t("COMMON.FAIL"));
      }

      const data = { otn2000: other };

      this.$http
        .post(data)
        .then(res => {
          console.log("add", res);
        })
        .catch(err => {
          console.log("err", err);
        })
        .finally(() => {
          console.log("finally");
          this.getUserList();
          this.cancelAddFrom();
        });
    },
    cancelAddFrom() {
      this.isAddUser = false;
      this.dataForm = {
        boardname: "NMU",
        username: "",
        password: "",
        repassword: "",
        type: "add_user",
      };
    },
    delItem(username) {
      const data = { otn2000: { boardname: "NMU", username, type: "del_user" } };

      this.$confirm(this.$t("COMMON.DELETE_USER"))
        .then(() => {
          this.$http
            .post(data)
            .then(res => {
              console.log("add", res);
            })
            .catch(err => {
              console.log("err", err);
            })
            .finally(() => {
              console.log("finally");
              this.getUserList();
            });
        })
        .catch(() => {});
    },
    modifyItem(name) {
      this.modifyVisible = true;
      this.modifyName = name;
    },
    modifyCancel() {
      this.modifyForm = { password1: "", password2: "" };
      this.modifyVisible = false;
    },
    modifySubmit() {
      const { password1, password2 } = this.modifyForm;
      const reg = /^[0-9A-Za-z]{8,20}$/g;

      if (!reg.test(password1)) {
        alert(this.$t("USER_MANAGE.PASS_VALIDADE"));
        return;
      }

      if (password1 !== password2) {
        alert(this.$t("USER_MANAGE.UN_MODIFY_PASS"));
        return;
      }

      if (!password1.length) {
        alert(this.$t("USER_MANAGE.PASS_EMPTY"));
        return;
      }

      const data = { otn2000: { boardname: "NMU", username: this.modifyName, password: password1, type: "modify_user" } };

      if (password1.length) {
        this.$http
          .post(data)
          .then(res => {
            console.log("mo", res);
            alert(this.$t("COMMON.SUCCESS"));
          })
          .catch(err => {
            console.log("err", err);
            alert(this.$t("COMMON.FAIL"));
          })
          .finally(() => {
            console.log("finally");
            this.modifyCancel();
          });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.add-user-config-wrapper {
  display: flex;
  align-items: center;
  margin-top: 10px;

  & > * + * {
    margin-left: 15px;
  }
}

.user-btns-wrapper {
  margin-top: 10px;
  text-align: right;
}

.modify-pupur-wrapper {
  position: fixed;
  width: 400px;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  z-index: 1000;
  background-color: #fff;
  padding: 10px 20px;
  border: 1px solid #bbb;
  border-radius: 5px;
  box-sizing: border-box;

  .modify-input {
    width: 300px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    border: 1px solid #000;
    width: 100%;
    box-sizing: border-box;
    input {
      width: 100%;
    }
  }

  .modify-title {
    height: 30px;
    line-height: 30px;
  }

  .confirm-controls {
    margin: 10px 0 0 0;
    text-align: right;
  }
}
</style>
