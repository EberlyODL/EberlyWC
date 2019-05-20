/**
 * Copyright 2019 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html } from "@polymer/lit-element";
import { render } from "lit-html/lib/shady-render";

const successAnimation = {
  v: "5.3.4",
  fr: 29.9700012207031,
  ip: 0,
  op: 60.0000024438501,
  w: 500,
  h: 500,
  nm: "Comp 1",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Shape Layer 3",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [250.5, 250.5, 0], ix: 2 },
        a: { a: 0, k: [-32.795, -33.879, 0], ix: 1 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167"
              ],
              t: 0,
              s: [0, 0, 100],
              e: [0, 0, 100]
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167"
              ],
              t: 23,
              s: [0, 0, 100],
              e: [100, 100, 100]
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167"
              ],
              t: 28,
              s: [100, 100, 100],
              e: [80, 80, 100]
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167"
              ],
              t: 34,
              s: [80, 80, 100],
              e: [100, 100, 100]
            },
            { t: 39.0000015885026 }
          ],
          ix: 6
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-72.645, -32.879], [-42.645, -4.879], [1.355, -62.879]],
                  c: false
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: false
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0.086553551169, 0.576669730392, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    n: ["0p833_0p833_0p167_0p167"],
                    t: 0,
                    s: [1],
                    e: [15]
                  },
                  { t: 28.0000011404634 }
                ],
                ix: 5
              },
              lc: 1,
              lj: 1,
              ml: 4,
              ml2: { a: 0, k: 4, ix: 8 },
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0, 0, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: true
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [92.006, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Shape 1",
          np: 3,
          cix: 2,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 0,
      op: 60.0000024438501,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Shape Layer 2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [282.645, 288.879, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [336.664, 336.664], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0.086553551169, 0.576669730392, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    n: ["0p833_0p833_0p167_0p167"],
                    t: 2,
                    s: [57],
                    e: [57]
                  },
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    n: ["0p833_0p833_0p167_0p167"],
                    t: 15,
                    s: [57],
                    e: [10]
                  },
                  { t: 30.0000012219251 }
                ],
                ix: 5
              },
              lc: 1,
              lj: 1,
              ml: 4,
              ml2: { a: 0, k: 4, ix: 8 },
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0, 0, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: true
            },
            {
              ty: "tr",
              p: { a: 0, k: [-32.645, -38.879], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.167, 0.167], y: [0.167, 0.167] },
                    n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                    t: 2,
                    s: [122.343, 122.343],
                    e: [50, 50]
                  },
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.167, 0.167], y: [0.167, 0.167] },
                    n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                    t: 15,
                    s: [50, 50],
                    e: [75, 75]
                  },
                  { t: 30.0000012219251 }
                ],
                ix: 3
              },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Ellipse 1",
          np: 3,
          cix: 2,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 2.00000008146167,
      op: 62.0000025253118,
      st: 2.00000008146167,
      bm: 0
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Shape Layer 1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [282.645, 288.879, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [336.664, 336.664], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0.086553551169, 0.576669730392, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    n: ["0p833_0p833_0p167_0p167"],
                    t: 0,
                    s: [0],
                    e: [15]
                  },
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    n: ["0p833_0p833_0p167_0p167"],
                    t: 13,
                    s: [15],
                    e: [28]
                  },
                  { t: 28.0000011404634 }
                ],
                ix: 5
              },
              lc: 1,
              lj: 1,
              ml: 4,
              ml2: { a: 0, k: 4, ix: 8 },
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0, 0, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: true
            },
            {
              ty: "tr",
              p: { a: 0, k: [-32.645, -38.879], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.167, 0.167], y: [0.167, 0.167] },
                    n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                    t: 0,
                    s: [122.343, 122.343],
                    e: [1, 1]
                  },
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.167, 0.167], y: [0.167, 0.167] },
                    n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                    t: 13,
                    s: [1, 1],
                    e: [50, 50]
                  },
                  { t: 28.0000011404634 }
                ],
                ix: 3
              },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Ellipse 1",
          np: 3,
          cix: 2,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 0,
      op: 60.0000024438501,
      st: 0,
      bm: 0
    }
  ],
  markers: []
};
const loadingAnimation = {
  v: "5.3.4",
  fr: 29.9700012207031,
  ip: 0,
  op: 10.0000004073083,
  w: 500,
  h: 500,
  nm: "Comp 1",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Shape Layer 4",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [250.5, 250.5, 0], ix: 2 },
        a: { a: 0, k: [-32.795, -33.879, 0], ix: 1 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167"
              ],
              t: -13,
              s: [0, 0, 100],
              e: [0, 0, 100]
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167"
              ],
              t: 10,
              s: [0, 0, 100],
              e: [100, 100, 100]
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167"
              ],
              t: 15,
              s: [100, 100, 100],
              e: [80, 80, 100]
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167"
              ],
              t: 21,
              s: [80, 80, 100],
              e: [100, 100, 100]
            },
            { t: 26.0000010590017 }
          ],
          ix: 6
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-72.645, -32.879], [-42.645, -4.879], [1.355, -62.879]],
                  c: false
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: false
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0.086553551169, 0.576669730392, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    n: ["0p833_0p833_0p167_0p167"],
                    t: -13,
                    s: [1],
                    e: [15]
                  },
                  { t: 15.0000006109625 }
                ],
                ix: 5
              },
              lc: 1,
              lj: 1,
              ml: 4,
              ml2: { a: 0, k: 4, ix: 8 },
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0, 0, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: true
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [92.006, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Shape 1",
          np: 3,
          cix: 2,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 0,
      op: 10.0000004073083,
      st: -13.0000005295009,
      bm: 0
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Shape Layer 3",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [250.5, 250.5, 0], ix: 2 },
        a: { a: 0, k: [-32.795, -33.879, 0], ix: 1 },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167"
              ],
              t: -13,
              s: [0, 0, 100],
              e: [0, 0, 100]
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167"
              ],
              t: 10,
              s: [0, 0, 100],
              e: [100, 100, 100]
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167"
              ],
              t: 15,
              s: [100, 100, 100],
              e: [80, 80, 100]
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              n: [
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167",
                "0p833_0p833_0p167_0p167"
              ],
              t: 21,
              s: [80, 80, 100],
              e: [100, 100, 100]
            },
            { t: 26.0000010590017 }
          ],
          ix: 6
        }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 0,
                k: {
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-72.645, -32.879], [-42.645, -4.879], [1.355, -62.879]],
                  c: false
                },
                ix: 2
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: false
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0.086553551169, 0.576669730392, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    n: ["0p833_0p833_0p167_0p167"],
                    t: -13,
                    s: [1],
                    e: [15]
                  },
                  { t: 15.0000006109625 }
                ],
                ix: 5
              },
              lc: 1,
              lj: 1,
              ml: 4,
              ml2: { a: 0, k: 4, ix: 8 },
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0, 0, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: true
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [92.006, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Shape 1",
          np: 3,
          cix: 2,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: -0.30272728505761,
      op: 0,
      st: -13.0000005295009,
      bm: 0
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Shape Layer 2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [282.645, 288.879, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [336.664, 336.664], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0.086553551169, 0.576669730392, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    n: ["0p833_0p833_0p167_0p167"],
                    t: -11,
                    s: [57],
                    e: [57]
                  },
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    n: ["0p833_0p833_0p167_0p167"],
                    t: 2,
                    s: [57],
                    e: [10]
                  },
                  { t: 17.0000006924242 }
                ],
                ix: 5
              },
              lc: 1,
              lj: 1,
              ml: 4,
              ml2: { a: 0, k: 4, ix: 8 },
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0, 0, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: true
            },
            {
              ty: "tr",
              p: { a: 0, k: [-32.645, -38.879], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.167, 0.167], y: [0.167, 0.167] },
                    n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                    t: -11,
                    s: [122.343, 122.343],
                    e: [50, 50]
                  },
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.167, 0.167], y: [0.167, 0.167] },
                    n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                    t: 2,
                    s: [50, 50],
                    e: [75, 75]
                  },
                  { t: 17.0000006924242 }
                ],
                ix: 3
              },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Ellipse 1",
          np: 3,
          cix: 2,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 0,
      op: 10.0000004073083,
      st: -11.0000004480392,
      bm: 0
    },
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Shape Layer 1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [282.645, 288.879, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [336.664, 336.664], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0.086553551169, 0.576669730392, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    n: ["0p833_0p833_0p167_0p167"],
                    t: -13,
                    s: [0],
                    e: [15]
                  },
                  {
                    i: { x: [0.833], y: [0.833] },
                    o: { x: [0.167], y: [0.167] },
                    n: ["0p833_0p833_0p167_0p167"],
                    t: 0,
                    s: [15],
                    e: [28]
                  },
                  { t: 15.0000006109625 }
                ],
                ix: 5
              },
              lc: 1,
              lj: 1,
              ml: 4,
              ml2: { a: 0, k: 4, ix: 8 },
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 0, 0, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: true
            },
            {
              ty: "tr",
              p: { a: 0, k: [-32.645, -38.879], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: {
                a: 1,
                k: [
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.167, 0.167], y: [0.167, 0.167] },
                    n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                    t: -13,
                    s: [122.343, 122.343],
                    e: [1, 1]
                  },
                  {
                    i: { x: [0.833, 0.833], y: [0.833, 0.833] },
                    o: { x: [0.167, 0.167], y: [0.167, 0.167] },
                    n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                    t: 0,
                    s: [1, 1],
                    e: [50, 50]
                  },
                  { t: 15.0000006109625 }
                ],
                ix: 3
              },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Ellipse 1",
          np: 3,
          cix: 2,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 0,
      op: 10.0000004073083,
      st: -13.0000005295009,
      bm: 0
    }
  ],
  markers: [{ tm: 0, cm: "", dr: 0 }, { tm: 10.0000004073083, cm: "", dr: 0 }]
};

export { CarlyButton };
/**
 * `carly-button`
 * `Cool submit button for testing.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class CarlyButton extends LitElement {
  // render function
  render() {
    return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        #container {
          display: flex;
          align-items: center;
        }

        #state {
          width: 75px;
          height: 75px;
        }
      </style>
      <div id="container">
        ${!this.loading && !this.success
          ? html`
              <div id="button">
                <button @click=${this._clicked}>
                  <slot></slot>
                </button>
              </div>
            `
          : ""}
        <div id="state"></div>
      </div>
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      success: {
        type: "Boolean"
      },
      loading: {
        type: "Boolean"
      }
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "carly-button";
  }

  // life cycle
  constructor() {
    super();
    this._setup = false;
    this.success = false;
    this.loading = false;
    this.setup();
  }

  setup() {
    if (!window.bodymovin) {
      const importNode = document.createElement("script");
      importNode.src =
        "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.1/lottie.js";
      importNode.addEventListener("load", e => {
        this._setup = true;
        this.requestUpdate();
      });
      document.head.appendChild(importNode);
    }
  }

  triggerSuccessAnimation() {
    this._clearState();
    this.updateComplete.then(() => {
      bodymovin.loadAnimation({
        container: this.shadowRoot.getElementById("state"),
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: successAnimation
      });
    });
  }

  triggerLoadingAnimation() {
    this._clearState();
    this.updateComplete.then(() => {
      bodymovin.loadAnimation({
        container: this.shadowRoot.getElementById("state"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: loadingAnimation
      });
    });
  }

  _clearState() {
    this.shadowRoot.getElementById("state").innerHTML = "";
  }

  _clicked() {
    this.dispatchEvent(
      new CustomEvent("clicked", {
        bubbles: true,
        composed: true,
        cancelable: true
      })
    );
  }

  updated() {
    if (this._setup) {
      if (this.success) {
        this.triggerSuccessAnimation();
      }
      if (this.loading) {
        this.triggerLoadingAnimation();
      }
    }
  }
}
customElements.define("carly-button", CarlyButton);
