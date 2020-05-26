# frozen_string_literal: true

# name: post-user-agent
# about: Used for displaying user's main agent
# version: 1.0.0
# authors: Zero Dev

after_initialize do
  whitelist_public_user_custom_field :user_field_1
end
