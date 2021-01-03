import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { matchers, createSerializer } from '@emotion/jest';
import snapshotRemoveProperties from 'jest-snapshot-remove-properties';

Enzyme.configure({ adapter: new Adapter() });
/* Adds check "toHaveStyleRule" */
expect.extend(matchers);
/* Adds a serializer that snapshot`s styles are showed correct */
expect.addSnapshotSerializer(createSerializer());
/* Removes theme-props from  snapshots */
expect.addSnapshotSerializer(snapshotRemoveProperties(['theme']));
