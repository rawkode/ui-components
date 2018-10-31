# CHANGELOG
## 1.7.3
- Fix subject line wrapping on email-card
- Add is-live modifier to change cursor, hide icon
## 1.7.2
- Update contributing doc with component organization structure
## 1.7.1
- Add style support for alerts that have tooltips with underlines
- Adjust styles for tooltips w/ has-underline to use mixin
## 1.7.0
 - FullscreenModal now supports a render prop for header content
## 1.6.0
- Update icon font w/ mc editor icons
## 1.5.6
- Update editor accordion style, caret position
## 1.5.5
- Fix error with <FileUpload /> in FireFox
## 1.2.5
- Allow INPUT HTML Props ( autofocus ) in Button
## 1.2.4
- Allow native HTML Props ( tabIndex ) in Button
## 1.1.3
- Fix CSS module issue causing duplicate class names
## 1.1.2
- Omit generic now also omits onChange in TextInput
## 1.1.1
- Fix Omit generic typescript util for TS 2.9
## 1.1.0
- Add Upload Progress component
- Ammend build process to ease use of ui-components in other apps
## 1.0.2
- TextInput props include typed HTMLAttributes for TS consumers
## 1.0.1
- PageHeader styles have been brought inline with typography standards
## 0.14.8
- Support disabling the add new unsub group card
## 0.14.7
- Added prettier precommit command to lint-staged
- Removed the old segment-term component
## 0.14.6
- Unsubscribe group cards (group and create new)
## 0.14.5
- Fixed card actions. Actions now use dropdown button with vertical ellipsis icon
- Large card example. Cards now support icons with user-specified sizes
## 0.14.4
- Support for split cards
## 0.14.3
- Support for inline cards
- Removed hard-coded 100% width style from card module. https://github.com/sendgrid/ui-components/issues/100
## 0.14.2
- Support for drag and drop module cards
## 0.14.1
- Statistics component is now format agnostic. expects {label: string, amount: number | string}. Formatting should be handled by consumer,
## 0.14.0
- attributes added to every component.  This allows developers to pass any attribute they'd like to any component, and it'll slap it on the element of most importance.  Usually that is the container, but in some specific cases it will be an 'input'.
## 0.13.4
- Add EmailCard component
## 0.13.3
- Use React Portals for modals. Requires mock for jest
## 0.12.7
- Fix divider w/ label component

## 0.12.4
- Add fragment loader component

## 0.12.0
- Add center modal
- Remove incorrect confirmation modal example

## 0.10.0
- Add support for data-tooltip-length attribute

## 0.9.5
- EmptyState component can now take a react node as an icon type

## 0.9.4
- Added components PageHeading and PageHeader
- Added CONTRIBUTING
- Added templates
- Added CHANGELOG.md

## 0.9.3
- Nicer companion TextInput in Tooltips

## 0.9.2
- Refactor to use Rollup for the build process
- Use pull request template
- Added component Grid

## 0.9.1
- Segment Term updates

## 0.9.0
- Add conf model

## 0.8.0
- Adds a Table component
- Add Tables and Tooltips to ui-components

## 0.7.0
- Compile to CommonJS

## 0.6.0
- Fix text input arguments
- Use a secondary button if using a gear in the dropdown

## 0.5.4
- Revert tsconf

## 0.5.3
- Fixed tsconf
- Fixed react imports

## 0.5.2
- Attempt to fix building as a lib

## 0.5.1
- Attempt to fix building as a lib

## 0.5.0
- Update TextInput and SegmentTerm

## 0.4.0
- Added onBlur to expect an event handler if provided

## 0.3.0
- Added side modals

## 0.2.3
- Added auto publish

## 0.2.2

## 0.2.1

## 0.2.0

## 0.1.1
- Added IDs to buttons

## 0.1.0
- Fixed button list when rendering children conditionally
- Added segment terms
- Added breadcrumb
- Added radio button to exports

## 0.0.5
- Added .npmignore
- Removed testing as a precommit hook
- Added prepublish step

## 0.0.4

## 0.0.3
- Fixed build, classnames, and imports
- Fixed name

## 0.0.2
- Add radio component

## 0.0.1
- Initial Release (initial tag at least...)
