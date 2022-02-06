import { splitTranscript } from './split-transcript';

describe('split transcript', (): void => {
  [
    { transcript: '', expected: [] },
    { transcript: 'ǝ̄', expected: ['ǝ̄'] },
    { transcript: 'ā̊', expected: ['ā̊'] },
    { transcript: 'ā̊', expected: ['ā̊'] },
    { transcript: 'yānīm', expected: ['y', 'ā', 'n', 'ī', 'm'] },
    { transcript: 'manō', expected: ['m', 'a', 'n', 'ō'] },
    { transcript: 'śyaoθnəm', expected: ['ś', 'y', 'a', 'o', 'θ', 'n', 'ə', 'm'] },
    { transcript: 'aṣaonō', expected: ['a', 'ṣ', 'a', 'o', 'n', 'ō'] },
    { transcript: 'aṣ̌aonō', expected: ['a', 'ṣ̌', 'a', 'o', 'n', 'ō'] },
    { transcript: 'gāθā̊', expected: ['g', 'ā', 'θ', 'ā̊'] },
    { transcript: 'spəntā', expected: ['s', 'p', 'ə', 'n', 't', 'ā'] },
    { transcript: 'spəṇtā', expected: ['s', 'p', 'ə', 'ṇ', 't', 'ā'] },
    { transcript: 'gǝ̄urwāin', expected: ['g', 'ǝ̄', 'u', 'r', 'w', 'ā', 'i', 'n'] },
    {
      transcript: 'Zaraθuštrahe',
      expected: ['Z', 'a', 'r', 'a', 'θ', 'u', 'š', 't', 'r', 'a', 'h', 'e'],
    },
  ].forEach((testCase): void => {
    test('should split', async (): Promise<void> => {
      // Given
      const { transcript, expected } = testCase;

      // When
      const actual = splitTranscript(transcript);

      // Then
      expect(actual).toEqual(expected);
    });
  });
});
