import { useState, useRef } from 'react';
import useEvent from './useEvent';
import { MIN_DESKTOP_WIDTH, debounce } from '../utils';

function isCurrentWindowWidthSmall() {
  return window.innerWidth < MIN_DESKTOP_WIDTH;
}

function isCurrentWindowWidthBig() {
  return window.innerWidth >= MIN_DESKTOP_WIDTH;
}
