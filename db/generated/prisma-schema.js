module.exports = {
        typeDefs: /* GraphQL */ `type AggregateBannedPhrase {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BannedPhrase {
  id: ID!
  phrase: String!
  test: String!
}

type BannedPhraseConnection {
  pageInfo: PageInfo!
  edges: [BannedPhraseEdge]!
  aggregate: AggregateBannedPhrase!
}

input BannedPhraseCreateInput {
  phrase: String!
  test: String!
}

type BannedPhraseEdge {
  node: BannedPhrase!
  cursor: String!
}

enum BannedPhraseOrderByInput {
  id_ASC
  id_DESC
  phrase_ASC
  phrase_DESC
  test_ASC
  test_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BannedPhrasePreviousValues {
  id: ID!
  phrase: String!
  test: String!
}

type BannedPhraseSubscriptionPayload {
  mutation: MutationType!
  node: BannedPhrase
  updatedFields: [String!]
  previousValues: BannedPhrasePreviousValues
}

input BannedPhraseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BannedPhraseWhereInput
  AND: [BannedPhraseSubscriptionWhereInput!]
  OR: [BannedPhraseSubscriptionWhereInput!]
  NOT: [BannedPhraseSubscriptionWhereInput!]
}

input BannedPhraseUpdateInput {
  phrase: String
  test: String
}

input BannedPhraseWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  phrase: String
  phrase_not: String
  phrase_in: [String!]
  phrase_not_in: [String!]
  phrase_lt: String
  phrase_lte: String
  phrase_gt: String
  phrase_gte: String
  phrase_contains: String
  phrase_not_contains: String
  phrase_starts_with: String
  phrase_not_starts_with: String
  phrase_ends_with: String
  phrase_not_ends_with: String
  test: String
  test_not: String
  test_in: [String!]
  test_not_in: [String!]
  test_lt: String
  test_lte: String
  test_gt: String
  test_gte: String
  test_contains: String
  test_not_contains: String
  test_starts_with: String
  test_not_starts_with: String
  test_ends_with: String
  test_not_ends_with: String
  AND: [BannedPhraseWhereInput!]
  OR: [BannedPhraseWhereInput!]
  NOT: [BannedPhraseWhereInput!]
}

input BannedPhraseWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createBannedPhrase(data: BannedPhraseCreateInput!): BannedPhrase!
  updateBannedPhrase(data: BannedPhraseUpdateInput!, where: BannedPhraseWhereUniqueInput!): BannedPhrase
  updateManyBannedPhrases(data: BannedPhraseUpdateInput!, where: BannedPhraseWhereInput): BatchPayload!
  upsertBannedPhrase(where: BannedPhraseWhereUniqueInput!, create: BannedPhraseCreateInput!, update: BannedPhraseUpdateInput!): BannedPhrase!
  deleteBannedPhrase(where: BannedPhraseWhereUniqueInput!): BannedPhrase
  deleteManyBannedPhrases(where: BannedPhraseWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum Permission {
  ADMIN
  USER
}

type Query {
  bannedPhrase(where: BannedPhraseWhereUniqueInput!): BannedPhrase
  bannedPhrases(where: BannedPhraseWhereInput, orderBy: BannedPhraseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BannedPhrase]!
  bannedPhrasesConnection(where: BannedPhraseWhereInput, orderBy: BannedPhraseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BannedPhraseConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  bannedPhrase(where: BannedPhraseSubscriptionWhereInput): BannedPhraseSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  discordId: String!
  username: String!
  permissions: [Permission!]!
  punished: Boolean
  warned: Boolean
  avatar: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  discordId: String!
  username: String!
  permissions: UserCreatepermissionsInput
  punished: Boolean
  warned: Boolean
  avatar: String
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  discordId_ASC
  discordId_DESC
  username_ASC
  username_DESC
  punished_ASC
  punished_DESC
  warned_ASC
  warned_DESC
  avatar_ASC
  avatar_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  discordId: String!
  username: String!
  permissions: [Permission!]!
  punished: Boolean
  warned: Boolean
  avatar: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  discordId: String
  username: String
  permissions: UserUpdatepermissionsInput
  punished: Boolean
  warned: Boolean
  avatar: String
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  discordId: String
  discordId_not: String
  discordId_in: [String!]
  discordId_not_in: [String!]
  discordId_lt: String
  discordId_lte: String
  discordId_gt: String
  discordId_gte: String
  discordId_contains: String
  discordId_not_contains: String
  discordId_starts_with: String
  discordId_not_starts_with: String
  discordId_ends_with: String
  discordId_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  punished: Boolean
  punished_not: Boolean
  warned: Boolean
  warned_not: Boolean
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    