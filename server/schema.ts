export const typeDefs = `#graphql
    type User {
        id: ID!
        name: String!
        email: String! 
        categories: [Category!] #Have a separate resolver for nested querying
        subcategories: [Subcategory!] #Have a separate resolver for nested querying
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
        userId: ID! #Each category has a corresponding creator user
    }
    type Account {
        id: ID!
        name: String!
        amount: String!
        type: String! #Normal-Savings
        userId: ID! #Each category has a corresponding creator user
    }
    type Debt {
        id: ID!
        name: String!
        amount: String!
        type: String! #Normal-Savings
        userId: ID! #Each category has a corresponding creator user
    }
    
    type Query {
        users: [User]
        user(id: ID!): User
        subjects: [Subject]
        subject(id: ID!): Subject
        tasks: [Task]
        task(id: ID!): Task
    }
    type Mutation {
        addUser(user: AddUserInput!): User
        deleteUser(id: ID!): User
        updateUser(id: ID!, edits: EditUserInput!): User
        addSubject(subject: AddSubjectInput!): Subject
        deleteSubject(id: ID!): Subject
        updateSubject(id: ID!, edits: EditSubjectInput!): Subject
        addTask(task: AddTaskInput!): Task
        deleteTask(id: ID!): Task
        updateTask(id: ID!, edits: EditTaskInput!): Task
    }

    # Input Types
    input AddUserInput {
        name: String!
        email: String!
    }

    input EditUserInput {
        name: String
        email: String
    }

    input AddSubjectInput {
       subject: String!
       year: String!
       semester: String!
       userId:  String!
    }

    input EditSubjectInput {
       subject: String
       year: String
       semester: String
       userId:  String!
    }

    input AddTaskInput {
        task: String!
        description: String!
        isPriority: Boolean
        isPassed: Boolean
        deadline: String!
        userId:  String!
        subjectId: String!
    }

    input EditTaskInput {
        task: String
        description: String
        isPriority: Boolean
        isPassed: Boolean
        deadline: String
        userId:  String!
        subjectId: String!
    }
`;

// No Password Login System
// Categories for Income and Expense
// Type of Accounts where the income or expensea will be pushed or derived from
// Derived values from the root elements
// Graphs leveraging all the data