import { Context } from "./context";

export const resolvers = {
  Query: {
    async users(_parent: any, _args: any, context: Context) {
      return await context.prisma.user.findMany();
    },
    async user(_parent: any, args: any, context: Context) {
      return await context.prisma.user.findFirst({
        where: {
          id: args.id,
        },
      });
    },
    async categories(_parent: any, _args: any, context: Context) {
      return await context.prisma.category.findMany();
    },
    async category(_parent: any, args: any, context: Context) {
      return await context.prisma.category.findFirst({
        where: {
          id: args.id,
        },
      });
    },
    async subcategories(_parent: any, _args: any, context: Context) {
      return await context.prisma.subcategory.findMany();
    },
    async subcategory(_parent: any, args: any, context: Context) {
      return await context.prisma.subcategory.findFirst({
        where: {
          id: args.id,
        },
      });
    },
    async transactions(_parent: any, _args: any, context: Context) {
      return await context.prisma.transaction.findMany();
    },
    async transaction(_parent: any, args: any, context: Context) {
      return await context.prisma.transaction.findFirst({
        where: {
          id: args.id,
        },
      });
    },
    async accounts(_parent: any, _args: any, context: Context) {
      return await context.prisma.account.findMany();
    },
    async account(_parent: any, args: any, context: Context) {
      return await context.prisma.account.findFirst({
        where: {
          id: args.id,
        },
      });
    },
    async debts(_parent: any, _args: any, context: Context) {
      return await context.prisma.debt.findMany();
    },
    async debt(_parent: any, args: any, context: Context) {
      return await context.prisma.debt.findFirst({
        where: {
          id: args.id,
        },
      });
    },
  },
  User: {
    //The separate resolver for nested querying
    async categories(parent: any, _args: any, context: Context) {
      return await context.prisma.category.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
    async subcategories(parent: any, _args: any, context: Context) {
      return await context.prisma.subcategory.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
    async transactions(parent: any, _args: any, context: Context) {
      return await context.prisma.transaction.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
    async accounts(parent: any, _args: any, context: Context) {
      return await context.prisma.account.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
    async debts(parent: any, _args: any, context: Context) {
      return await context.prisma.debt.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
  },
  Category: {
    //The separate resolver for nested querying
    async subcategories(parent: any, _args: any, context: Context) {
      return await context.prisma.subcategory.findMany({
        where: {
          categoryId: parent.id,
        },
      });
    },
  },
  // Optional might not be used
  // Task: {
  //    subject(parent: any, _args: any, context: Context) {
  //     return await context.prisma.subject.findFirst({
  //       where: {

  //       }
  //     })
  //    }
  // },
  Mutation: {
    async addUser(_parent: any, args: any, context: Context) {
      return await context.prisma.user.create({
        data: {
          name: args.user.name,
          email: args.user.email,
        },
        // ...args.user - instead of name and email is also possible using spread operator much faster
      });
    },
    async deleteUser(_parent: any, args: any, context: Context) {
      return await context.prisma.user.delete({
        where: { id: args.id },
      });
    },
    async updateUser(_parent: any, args: any, context: Context) {
      return await context.prisma.user.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.edits,
        },
      });
    },
    async addCategory(_parent: any, args: any, context: Context) {
      return await context.prisma.category.create({
        data: {
          ...args.category,
        },
      });
    },
    async deleteCategory(_parent: any, args: any, context: Context) {
      return await context.prisma.category.delete({
        where: {
          id: args.id,
        },
      });
    },
    async updateCategory(_parent: any, args: any, context: Context) {
      return await context.prisma.category.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.edits,
        },
      });
    },
    async addSubcategory(_parent: any, args: any, context: Context) {
      return await context.prisma.subcategory.create({
        data: {
          ...args.subcategory,
        },
      });
    },
    async deleteSubcategory(_parent: any, args: any, context: Context) {
      return await context.prisma.subcategory.delete({
        where: {
          id: args.id,
        },
      });
    },
    async updateSubcategory(_parent: any, args: any, context: Context) {
      return await context.prisma.subcategory.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.edits,
        },
      });
    },
    async addTransaction(_parent: any, args: any, context: Context) {
      return await context.prisma.transaction.create({
        data: {
          ...args.transaction,
        },
      });
    },
    async deleteTransaction(_parent: any, args: any, context: Context) {
      return await context.prisma.transaction.delete({
        where: {
          id: args.id,
        },
      });
    },
    async updateTransaction(_parent: any, args: any, context: Context) {
      return await context.prisma.transaction.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.edits,
        },
      });
    },
    async addAccount(_parent: any, args: any, context: Context) {
      return await context.prisma.account.create({
        data: {
          ...args.account,
        },
      });
    },
    async deleteAccount(_parent: any, args: any, context: Context) {
      return await context.prisma.account.delete({
        where: {
          id: args.id,
        },
      });
    },
    async updateAccount(_parent: any, args: any, context: Context) {
      return await context.prisma.account.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.edits,
        },
      });
    },
    async addDebt(_parent: any, args: any, context: Context) {
      return await context.prisma.debt.create({
        data: {
          ...args.debt,
        },
      });
    },
    async deleteDebt(_parent: any, args: any, context: Context) {
      return await context.prisma.debt.delete({
        where: {
          id: args.id,
        },
      });
    },
    async updateDebt(_parent: any, args: any, context: Context) {
      return await context.prisma.debt.update({
        where: {
          id: args.id,
        },
        data: {
          ...args.edits,
        },
      });
    },
  },
};
