import {
  mysqlTable,
  mysqlEnum,
  serial,
  varchar,
  int,
  timestamp,
} from "drizzle-orm/mysql-core";

export const applications = mysqlTable("applications", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 120 }).notNull(),
  age: int("age").notNull(),
  hasPassport: mysqlEnum("has_passport", ["yes", "no"]).notNull(),
  currentOccupation: varchar("current_occupation", { length: 120 }).notNull(),
  role: mysqlEnum("role", ["nanny", "housekeeper", "driver"]).notNull(),
  experienceYears: int("experience_years").notNull(),
  underContract: mysqlEnum("under_contract", ["yes", "no"]).notNull(),
  contractTimeRemaining: varchar("contract_time_remaining", { length: 120 }),
  currentSalary: varchar("current_salary", { length: 80 }).notNull(),
  gender: varchar("gender", { length: 60 }).notNull(),
  country: varchar("country", { length: 80 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
