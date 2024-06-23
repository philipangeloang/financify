import { gql } from "@apollo/client"

// USER ---------------------------------------------------------
export const ADD_USER = gql`
 mutation addUser($user: AddUserInput!) {
  addUser(user: $user) {
    id
    name
    email
  }
}
`;

export const DELETE_USER = gql`
  mutation deleteUser($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    id
    name
    email
  }
}
`;

export const UPDATE_USER = gql`
 mutation updateUser($updateUserId: ID!, $edits: EditUserInput!) {
  updateUser(id: $updateUserId, edits: $edits) {
    id
    name
    email
  }
}
`;

//CATEGORY ---------------------------------------------------------
export const ADD_CATEGORY = gql`
 mutation addCategory($category: AddCategoryInput!) {
  addCategory(category: $category) {
    id
    name
    type
  }
}
`;

export const DELETE_CATEGORY = gql`
mutation deleteCategory($deleteCategoryId: ID!) {
  deleteCategory(id: $deleteCategoryId) {
    id
    name
    type
  }
}
`;

export const UPDATE_CATEGORY = gql`
mutation updateCategory($updateCategoryId: ID!, $edits: EditCategoryInput!) {
  updateCategory(id: $updateCategoryId, edits: $edits) {
    id
    name
    type
  }
}
`;

// SUBCATEGORY ---------------------------------------------------------
export const ADD_SUBCATEGORY = gql`
mutation addSubcategory($subcategory: AddSubcategoryInput!) {
  addSubcategory(subcategory: $subcategory) {
    id
    name
    type
    categoryId
  }
}
`;

export const DELETE_SUBCATEGORY = gql`
mutation deleteSubcategory($deleteSubcategoryId: ID!) {
  deleteSubcategory(id: $deleteSubcategoryId) {
    id
    name
    type
    categoryId
  }
}
`;

export const UPDATE_SUBCATEGORY = gql`
mutation updateSubcategory($updateSubcategoryId: ID!, $edits: EditSubcategoryInput!) {
  updateSubcategory(id: $updateSubcategoryId, edits: $edits) {
    id
    name
    type
    categoryId
  }
}
`;

// TRANSACTION ---------------------------------------------------------
export const ADD_TRANSACTION = gql`
mutation addTransaction($transaction: AddTransactionInput!) {
  addTransaction(transaction: $transaction) {
    id
    category
    amount
    date
    type
  }
}
`;

export const DELETE_TRANSACTION = gql`
mutation deleteTransaction($deleteTransactionId: ID!) {
  deleteTransaction(id: $deleteTransactionId) {
    id
    category
    amount
    date
    type
  }
}
`;

export const UPDATE_TRANSACTION = gql`
mutation updateTransaction($updateTransactionId: ID!, $edits: EditTransactionInput!) {
  updateTransaction(id: $updateTransactionId, edits: $edits) {
    id
    category
    amount
    date
    type
  }
}
`;

// ACCOUNT ---------------------------------------------------------
export const ADD_ACCOUNT = gql`
mutation addAccount($account: AddAccountInput!) {
  addAccount(account: $account) {
    id
    name
    amount
  }
}
`;

export const DELETE_ACCOUNT = gql`
mutation deleteAccount($deleteAccountId: ID!) {
  deleteAccount(id: $deleteAccountId) {
    id
    name
    amount
  }
}
`;

export const UPDATE_ACCOUNT = gql`
mutation updateAccount($updateAccountId: ID!, $edits: EditAccountInput!) {
  updateAccount(id: $updateAccountId, edits: $edits) {
    id
    name
    amount
  }
}
`;

// DEBT ---------------------------------------------------------
export const ADD_DEBT = gql`
mutation addDebt($debt: AddDebtInput!) { 
  addDebt(debt: $debt) {
    id
    name
    paid
  }
}
`;

export const DELETE_DEBT = gql`
mutation deleteDebt($deleteDebtId: ID!) {
  deleteDebt(id: $deleteDebtId) {
    id
    name
    paid
  }
}
`;

export const UPDATE_DEBT = gql`
mutation updateDebt($updateDebtId: ID!, $edit: EditDebtInput!) {
  updateDebt(id: $updateDebtId, edit: $edit) {
    id
    name
    paid
  }
}
`;
