import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType, InferSubjects } from '@casl/ability';

// Define the actions for CASL
export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';

// Define subjects based on your application's models/entities, 'all' is a special keyword in CASL
export type Subjects = InferSubjects<typeof Ability> | 'all';

// Define the Ability type for CASL
export type AppAbility = Ability<[Actions, Subjects]>;
const AppAbility = Ability as AbilityClass<AppAbility>;

// Define a generic object for ACL
export type ACLObj = {
  action: Actions;
  subject: Subjects;
};

// Function to define rules for the ability
const defineRulesFor = () => {
  const { can, build } = new AbilityBuilder(AppAbility);

  // Allow logged-in users to 'manage' everything, using 'all' as a subject
  can('manage', 'all');

  return build({
    // Function to detect the subject type, needed by CASL to check permissions
    detectSubjectType: (item) => typeof item === 'object' && item ? (item.constructor as ExtractSubjectType<Subjects>) : item,
  });
};

// Function to build the ability for the user
export const buildAbilityFor = (): AppAbility => {
  return defineRulesFor();
};

// Default ACL object that specifies that any action can be performed on any subject
export const defaultACLObj: ACLObj = {
  action: 'manage',
  subject: 'all',
};

export default defineRulesFor;
