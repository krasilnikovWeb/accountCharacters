<template>
  <div class="edit">
    <div class="edit__personal">
      <div class="edit__title-personal"><h1>Персональные данные</h1></div>
      <div class="edit__name-personal">
        <label class="edit__label">Имя</label>
        <textarea
          v-model="account.accountName"
          type="text"
          class="edit__input"
          maxlength="30"
        ></textarea>
      </div>
      <div class="edit__age-personal">
        <label class="edit__label">Возраст</label>
        <textarea
          v-model="account.accountAge"
          type="text"
          class="edit__input"
          maxlength="30"
        ></textarea>
      </div>
    </div>
    <div class="edit__children">
      <div class="edit__title-child">
        <h1>Дети (макс. 5)</h1>
        <button
          v-bind:disabled="account.children.length >= 5"
          @click="addChild"
          class="edit__add-children-btn btn btn-outline-info btn-xs"
        >
          + Добавить ребенка
        </button>
      </div>
      <table class="edit__children-table">
        <tr v-for="child of account.children" :key="child.id">
          <td class="edit__name-child">
            <label class="edit__label">Имя</label>
            <textarea
              v-model="child.name"
              type="text"
              class="edit__input"
              maxlength="30"
            ></textarea>
          </td>
          <td class="edit__table-space"></td>
          <td class="edit__age-child">
            <label class="edit__label">Возраст</label>
            <textarea
              type="text"
              v-model="child.age"
              class="edit__input"
              maxlength="30"
            ></textarea>
          </td>
          <td class="edit__delete-child">
            <button
              @click="deleteChild(child.id)"
              class="edit__delete-child-btn edit__delete-child btn btn-link"
            >
              Удалить
            </button>
          </td>
        </tr>
      </table>
      <div class="edit__save-child">
        <button
          type="button"
          @click="editAccount"
          class="edit__save-children-btn btn btn-primary"
        >
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "edit",
  computed: {},
  data: () => ({
    account: {
      accountName: "",
      accountAge: null,
      children: [
        {
          id: 0,
          name: "",
          age: null,
        },
      ],
    },
  }),
  mounted() {
    if (this.$store.getters.account.length > 0) {
      this.account = structuredClone(this.$store.getters.account[0]);
    }
  },
  methods: {
    editAccount() {
      this.$store.dispatch("editAccount", {
        account: {
          accountName: this.account.accountName,
          accountAge: this.account.accountAge,
          children: this.account.children,
        },
      });
      this.$router.push("/preview");
    },
    addChild() {
      this.account.children.push({
        id: this.account.children.length,
        name: "",
        age: null,
      });
    },
    deleteChild(id) {
      this.account.children.splice(id, 1);
      this.account.children = this.account.children.map((x) => {
        if (x.id > id) {
          x.id = --x.id;
        }
        return x;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.edit {
  &__form-childrens-title {
    display: flex;
  }
  &__form-childrens-content {
    display: flex;
  }
  &__add-children-btn {
    color: #01a7fd;
    border: 2px solid #01a7fd;
    border-radius: 25px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  &__add-children-btn:hover {
    color: black;
    background-color: #01a7fd;
  }
  &__save-children-btn {
    background: #01a7fd;
    border: 1px solid #01a7fd;
    border-radius: 25px;
  }
  &__delete-child-btn {
    color: #01a7fd;
    padding-right: 0;
    text-decoration: none;
  }

  &__add-children-btn,
  &__save-children-btn,
  &__delete-child-btn {
    height: 44px;
    font-size: 14px;
    transition: 0.2s;
  }
  &__input {
    width: 100%;
    background-color: transparent;
    transition: 0.3s;
    border: 1px solid #e9e9e9;
    border-radius: 4px;
    height: 56px;
    resize: none;
    padding: 26px 0 0 16px !important;
    white-space: nowrap;
    outline: none;
    overflow: hidden;
    &-child {
      padding-right: 0;
    }
  }
  &__input:focus {
    border: 1px solid #1111117a;
  }

  &__label {
    position: absolute;
    color: #1111117a;
    padding: 8px 0 0 16px;
  }
  &__personal {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    margin: 0 30%;
    align-items: center;
    grid-template-areas:
      "title-personal"
      "name-personal"
      "age-personal";

    min-width: 240px;
  }
  &__title-personal {
    grid-area: title-personal;
  }
  &__name-personal {
    grid-area: name-personal;
  }
  &__age-personal {
    grid-area: age-personal;
  }
  &__children {
    align-items: center;
    display: grid;
    min-width: 240px;
    margin: 1% 30% 1% 30%;
    grid-auto-flow: row;
    textarea {
      padding: 26px 0 0 16px !important;
    }
  }

  &__title-child {
    display: flex;
    justify-content: space-between;
    h1 {
      padding: 1% 0 0 0;
    }
  }
  &__children-table {
    margin-top: 1%;
  }
  &__table-space {
    width: 2.3%;
  }
  &__delete-child {
    width: 1%;
  }
}
</style>
