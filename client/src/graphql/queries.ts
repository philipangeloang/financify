import { gql } from "@apollo/client"

// USER ---------------------------------------------------------
export const GET_USERS = gql`
  query users {
  users {
    id
    name
    email
  }
}
`;

export const GET_USER = gql`
  query user($userId: ID!) {
  user(id: $userId) {
    id
    name
    email
  }
}
`;

//CATEGORY ---------------------------------------------------------
export const GET_CATEGORIES = gql`
  query categories {
  categories {
    id
    name
    type
  }
}
`;

export const GET_CATEGORY = gql`
  query category($categoryId: ID!) {
  category(id: $categoryId) {
    id
    name
    type
  }
}
`;

// SUBCATEGORY ---------------------------------------------------------
export const GET_SUBCATEGORIES = gql`
  query subcategories {
  subcategories {
    id
    name
    type
    categoryId
  }
}
`;

export const GET_SUBCATEGORY = gql`
  query subcategory($subcategoryId: ID!) {
  subcategory(id: $subcategoryId) {
    id
    name
    type
    categoryId
  }
}
`;

// TRANSACTION ---------------------------------------------------------
export const GET_TRANSACTIONS = gql`
  query transactions {
  transactions {
    id
    category
    amount
    type
    date
  }
}
`;

export const GET_TRANSACTION = gql`
  query transaction($transactionId: ID!) {
  transaction(id: $transactionId) {
    id
    category
    amount
    type
    date
  }
}
`;

// ACCOUNT ---------------------------------------------------------
export const GET_ACCOUNTS = gql`
  query accounts {
  accounts {
    id
    name
    type
  }
}
`;

export const GET_ACCOUNT = gql`
  query account($accountId: ID!) {
  account(id: $accountId) {
    id
    name
    type
  }
}
`;

// DEBT ---------------------------------------------------------
export const GET_DEBTS = gql`
  query debts {
  debts {
    id
    name
    paid
  }
}
`;

export const GET_DEBT = gql`
  query debt($debtId: ID!) {
  debt(id: $debtId) {
    id
    name
    paid
  }
}
`;
