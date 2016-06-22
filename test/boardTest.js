import test from 'ava';
import createBoard from '../src/board.js';

test('A newly created board has a collection of rows', t => {
  const board = createBoard();

  t.truthy(board.rows[Symbol.iterator]);
});

test('A newly created board has a collection of columns', t => {
  const board = createBoard();

  t.truthy(board.cols[Symbol.iterator]);
});

test('A newly created board has a collection of tiles', t => {
  const board = createBoard();

  t.truthy(board.tiles[Symbol.iterator]);
});

test('A newly created board defaults to 9 rows', t => {
  t.plan(9);

  const board = createBoard();

  for (const _row of board.rows) {
    t.pass();
  }
});

test('Each row defaults to 12 columns', t => {
  t.plan(12);

  const board = createBoard();

  for (const _col of board.rows[2]) {
    t.pass();
  }
});

test('Each cell knows its position', t => {
  t.plan(12);

  const board = createBoard();

  for (let x = 0; x < 12; x++) {
    t.is(board.rows[4][x].col, x);
  }
});

test('A board will let you access a specific tile', t => {
  const board = createBoard();

  t.is(board.lookup(4, 2), board.rows[4][2]);
});

test.todo('Tiles on a newly created board are connected to the north');
test.todo('Tiles on a newly created board are connected to the south');
test.todo('Tiles on a newly created board are connected to the east');
test.todo('Tiles on a newly created board are connected to the west');

test.todo('A board lets you pick an uncliamed tile at random');
