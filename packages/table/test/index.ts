/**
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import "es6-shim";

import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import "../src";

import "./batcherTests.tsx";
import "./cellTests.tsx";
import "./clipboardTests.ts";
import "./columnHeaderCellTests.tsx";
import "./columnTests.tsx";
import "./common/internal/";
import "./editableCellTests.tsx";
import "./editableNameTests.tsx";
import "./formatsTests.tsx";
import "./gridTests.ts";
import "./guidesTests.tsx";
import "./loadableContentTests.tsx";
import "./loadingOptionsTests.tsx";
import "./locatorTests.tsx";
import "./menusTests.tsx";
import "./quadrants/tableQuadrantStackTests.tsx";
import "./quadrants/tableQuadrantTests.tsx";
import "./rectTests.ts";
import "./regionsTests.ts";
import "./reorderableTests.tsx";
import "./resizableTests.tsx";
import "./roundSizeTests.tsx";
import "./selectableTests.tsx";
import "./selectionTests.tsx";
import "./tableBodyTests.tsx";
import "./tableTests.tsx";
import "./utilsTests.ts";
