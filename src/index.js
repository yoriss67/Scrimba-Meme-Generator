export { default as Header } from './components/Header';
export { default as Meme } from './components/Meme';
export { default as App } from './components/App';
export { default as AppConundrum } from './components/AppConundrum';
// export {default as Counter} from './components/Counter'
export { default as AppCounter } from './components/Counter/AppCounter';
export { default as FlippingState } from './components/FlippingState';
export { default as ComplexState } from './components/ComplexState';
export { default as Api } from './components/StarWarsApi/Api';
export { default as WindowTracker } from './components/WindowTracker/WindowTracker';
export { default as AppWindowTracker } from './components/WindowTracker/AppWindowTracker';

function printArray() {
  const integerArray = [2, 4, 1, 3];

  for (let n = 1; integerArray.length - 1; n++) {
    for (let m = 1; integerArray.length - n; m++) {
      if (integerArray[m] > integerArray[m + 1]) {
        // integerArray[m] と integerArray[m+1]　の値を入れ替える
        let tmp = integerArray[m];
        integerArray[m] = integerArray[m + 1];
      }
    }
  }
  // integerArray　の全ての要素を先頭から順にコンマ区切りでreturn 出力する
  return integerArray.join(',');
}
