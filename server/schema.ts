export const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String! 
        categories: [Category!] #Have a separate resolver for nested querying
        subcategories: [Subcategory!] #Have a separate resolver for nested querying
        transactions: [Transaction!] #Have a separate resolver for nested querying
        accounts: [Account!] #Have a separate resolver for nested querying
        debts: [Debt!] #Have a separate resolver for nested querying
    }
    type Category {
        id: ID!
        name: String!
        type: String! #Expenses-Income
        subcategories: [Subcategory!] #Have a separate resolver for nested querying
        userId: ID! #Each category has a corresponding creator user
    }
    type Subcategory {
        id: ID!
        name: String!
        type: String! #Expenses-Income
        categoryId: ID! #Each subcategory has a corresponding category
        userId: ID! #Each subcategory has a corresponding creator user
    }
    type Transaction {
        id: ID!
        category: String!
        account: String!
        date: String!
        amount: String!
        type: String! #Expenses-Income
        userId: ID! #Each transaction has a corresponding creator user
    }
    type Account {
        id: ID!
        name: String!
        amount: String!
        type: String! #Normal-Savings
        userId: ID! #Each account has a corresponding creator user
    }
    type Debt {
        id: ID!
        name: String!
        amount: String!
        paid: Boolean!
        userId: ID! #Each debt has a corresponding creator user
    }
    
    type Query {
        users: [User]
        user(id: ID!): User
        categories: [Category]
        category(id: ID!): Category
        subcategories: [Subcategory]
        subcategory(id: ID!): Subcategory
        transactions: [Transaction]
        transaction(id: ID!): Transaction
        accounts: [Account]
        account(id: ID!): Account
        debts: [Debt]
        debt(id: ID!): Debt
    }
    type Mutation {
        addUser(user: AddUserInput!): User
        deleteUser(id: ID!): User
        updateUser(id: ID!, edits: EditUserInput!): User
        addCategory(category: AddCategoryInput!): Category
        deleteCategory(id: ID!): Category
        updateCategory(id: ID!, edits: EditCategoryInput!): Category
        addSubcategory(subcategory: AddSubcategoryInput!): Subcategory
        deleteSubcategory(id: ID!): Subcategory
        updateSubcategory(id: ID!, edits: EditSubcategoryInput!): Subcategory
        addTransaction(transaction: AddTransactionInput!): Transaction
        deleteTransaction(id: ID!): Transaction
        updateTransaction(id: ID!, edits: EditTransactionInput!): Transaction
        addAccount(account: AddAccountInput!): Account
        deleteAccount(id: ID!): Account
        updateAccount(id: ID!, edits: EditAccountInput!): Account
        addDebt(debt: AddDebtInput!): Debt
        deleteDebt(id: ID!): Debt
        updateDebt(id: ID!, edit: EditDebtInput!): Debt
    }

    # Input Types
    # Adds
    input AddUserInput {
        name: String!
        email: String!
    }

    input AddCategoryInput {
        name: String!
        type: String!
        userId: String!
    }
    input AddSubcategoryInput {
        name: String!
        type: String!
        userId: String!
        categoryId: String!
    }
    input AddTransactionInput {
        category: String!
        account: String!
        date: String!
        amount: String!
        type: String!
        userId: String! 
    }
    input AddAccountInput {
        name: String!
        amount: String!
        type: String! 
        userId: String!
    }
    input AddDebtInput {
        name: String!
        amount: String!
        paid: Boolean!
        userId: String!
    }

    # Edits
    input EditUserInput {
        name: String
        email: String
    }

    input EditCategoryInput {
        name: String
        type: String
        userId: String
    }
    input EditSubcategoryInput {
        name: String
        type: String
        userId: String
        categoryId: String
    }
    input EditTransactionInput {
        category: String
        account: String
        date: String
        amount: String
        type: String
        userId: String
    }
    input EditAccountInput {
        name: String
        amount: String
        type: String
        userId: String
    }
    input EditDebtInput {
        name: String
        amount: String
        paid: Boolean
        userId: String
    }

`;

// No Password Login System
// Categories for Income and Expense
// Type of Accounts where the income or expensea will be pushed or derived from
// Derived values from the root elements
// Graphs leveraging all the data