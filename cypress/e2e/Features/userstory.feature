Feature: User Navigation

  Scenario: User sees the primary navigation expanded on initial view
    Given any user is in PP
    When they view the primary navigation without interacting
    Then they see the primary navigation in the expanded state

  Scenario: User expands the primary navigation
    Given any user is in PP
    When they expand the primary navigation
    Then they see the primary navigation in the expanded state

  Scenario: User collapses the primary navigation
    Given any user is in PP
    When they collapse the primary navigation
    Then they see the primary navigation in the collapsed state

  Scenario: User's most recent navigation state is preserved
    Given any user is in PP
    When they use the application
    Then the most recent state of the primary navigation is preserved throughout the session
