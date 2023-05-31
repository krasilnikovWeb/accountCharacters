<template>
  <div class="preview">
    <div v-if="account">
      <table class="preview__account">
        <tr>
          <td><h1>Персональные данные</h1></td>
        </tr>
        <tr>
          <td class="preview__account_personal">
            {{ account.accountName + ", " + account.accountAge + " лет" }}
          </td>
        </tr>
      </table>

      <table
        class="preview__account_children"
        style="border-collapse: separate; border-spacing: 0 11px"
      >
        <h1>Дети</h1>
        <tr v-for="child of account.children" :key="child.id">
          <td class="preview__account_child">
            {{ child.name + ", " + child.age + " лет" }}
          </td>
        </tr>
      </table>
    </div>
    <p class="preview__account-no-child" v-else>Not found</p>
  </div>
</template>

<script>
export default {
  name: "preview",
  computed: {
    account() {
      if (this.$store.getters.account.length > 0)
        return this.$store.getters.account[0];
      else return null;
    },
  },
};
</script>

<style lang="scss">
.preview {
  font-size: 16px;
  margin: 0 30%;
  &__account {
    margin-top: 5%;
    &_children {
      margin-top: 10%;
    }
    &_child {
      background-color: #f1f1f1;
      padding: 10px;
      border-radius: 5px;
    }
    &_personal,
    &_child {
      font-weight: 700;
    }
    &-no-child {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  }
}
</style>
