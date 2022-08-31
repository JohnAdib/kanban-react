import ClickToEdit from "../molecules/ClickToEdit";

function BoardLists(props) {
  return (
    <main className='grow py-6 px-6 w-full h-full flex flex-row flex-nowrap gap-2 snap-x overflow-x-auto'>
      {listsLayout(props)}
      {elAddNewList(props)}
    </main>
  );
}

function listsLayout(props) {
  return props.data.map((val) => (
    <section
      className='snap-end shrink-0 relative basis-72 w-72 pb-2'
      key={val.id}
    >
      <div className='bg-slate-100/90 rounded leading-5 text-sm'>
        {elListTitle(props, val.id, val.title)}
      </div>
    </section>
  ));
}

function elListTitle(props, listID, listTitle) {
  return (
    <header className='p-2 font-semibold'>
      <div className='px-2'>
        <ClickToEdit
          value={listTitle}
          onChange={props.onChangeListTitle}
          onClickArchive={props.onArchiveList}
          father={listID}
        >
          {listTitle}
        </ClickToEdit>
      </div>
    </header>
  );
}

function elAddNewList(props) {
  return (
    <div className='flex-none grow-0 snap-start shrink-0a relative basis-72'>
      Add
    </div>
  );
}

export default BoardLists;
