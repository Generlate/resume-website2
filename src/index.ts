import { scene, renderer, camera, controls } from './sceneInitialize.js';
import { setupScene } from '../dist/sceneSetup.js';
import { loadBuildingModel } from '../dist/building.js';
import { loadCharacterModel } from '../dist/character.js';
import { createPortal } from '../dist/portal.js';

setupScene(scene);
loadBuildingModel(scene);
loadCharacterModel();
createPortal(scene, camera, renderer, controls);

// TODO: fix sections overlapping canvas
// TODO: make generlate.com default light theme
// TODO: add visual scripting images to architecture sub page
// TODO: incorporate react
// TODO: fix sub pages' mobile
// TODO: make sub pages have padding/margin like mobile on desktop.
// TODO: transitions
// TODO: make transitions delayed
// TODO: add animations to hover/click
// TODO: make subpages mobile-first
// TODO: add mongodb
// TODO: account for the video loading in the loader or compress video
// TODO: better project descriptions (with code blocks?)
// TODO: add easter eggs
// TODO: change icon to be different from generlate.com
// TODO: network and add some social proof
// TODO: add character click animation
// TODO: make the projects work on the website instead of just linking to them
// TODO: transitions
// TODO: slideshow arrows change color on hover
// TODO: slideshow arrow buttons should be same color as background and hover to different color
// TODO: add link symbol to generlate.com website link
// TODO: fix projects not showing on mobile
