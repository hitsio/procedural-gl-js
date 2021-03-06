/**
 * Copyright 2020 (c) Felix Palmer
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import THREE from 'three';
var postprocessUniforms = {
  tDiffuse: { type: 't', value: null },
  uResolution: { type: 'v2', value: new THREE.Vector2( 1.0, 1.0 ) }
};

export default postprocessUniforms;
