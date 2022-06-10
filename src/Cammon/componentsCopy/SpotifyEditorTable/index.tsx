import React from 'react'
import { useTable } from 'react-table'
import { v4 as uuid } from 'uuid'
import { observer } from 'mobx-react'

interface SpotifyEditorTableProps {
   editorsTableData: any
   editorActiveTabId: string
   updateSongDetails: (
      songThumbnialUrl: string,
      songName: string,
      artist: string,
      previewUrl: string,
      id: string
   ) => void
}

const SpotifyEditorTable = observer((props: SpotifyEditorTableProps) => {
   const { editorsTableData, editorActiveTabId, updateSongDetails } = props

   const data = React.useMemo(() => [...editorsTableData], [])

   const columns = React.useMemo(
      () => [
         {
            Header: '',
            accessor: 'trackNumber'
         },
         {
            Header: 'Track',
            accessor: 'songName',
            Cell: cellprops => {
               const { row } = cellprops
               const { original } = row
               const { songName } = original
               const editedSongName =
                  songName !== undefined &&
                  songName !== null &&
                  songName.slice(0, 30)
               return editedSongName
            }
         },
         {
            Header: 'Album',
            accessor: 'albumName',
            Cell: cellprops => {
               const { row } = cellprops
               const { original } = row
               const { albumName } = original
               const editedAlbumName =
                  albumName !== undefined &&
                  albumName !== null &&
                  albumName.slice(0, 30)
               return editedAlbumName
            }
         },
         {
            Header: 'Time',
            accessor: 'duration',
            Cell: cellprops => {
               const { row } = cellprops
               const { original } = row
               const { duration } = original
               const convertToSeconds = parseInt(duration) / 1000
               const convertToMinutes = convertToSeconds / 60
               const slicedTime = convertToMinutes.toString().slice(0, 4)
               return slicedTime
            }
         },
         {
            Header: 'Artist',
            accessor: 'artist'
         },
         {
            Header: 'Added',
            accessor: 'addedAt',
            Cell: cellprops => {
               const { row } = cellprops
               const { original } = row
               const { addedAt } = original
               const editedYear =
                  addedAt !== undefined &&
                  addedAt !== null &&
                  addedAt.slice(0, 10)
               return editedYear
            }
         }
      ],
      []
   )

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
   } = useTable({ columns, data })

   return (
      <table
         {...getTableProps()}
         style={{
            width: '100%'
         }}
      >
         <thead>
            {headerGroups.map(headerGroup => (
               <tr
                  {...headerGroup.getHeaderGroupProps()}
                  style={{
                     borderBottom: '1px solid #475569'
                  }}
                  key={headerGroup.headers[0].id}
               >
                  {headerGroup.headers.map(column => (
                     <th
                        {...column.getHeaderProps()}
                        style={{
                           color: 'white',
                           paddingBottom: '16px',
                           fontWeight: '600',
                           fontSize: '16px',
                           lineHeight: '21px',
                           fontStyle: 'normal'
                        }}
                        key={column.id}
                     >
                        {column.render('Header')}
                     </th>
                  ))}
               </tr>
            ))}
         </thead>
         <tbody {...getTableBodyProps()}>
            {rows.map(row => {
               prepareRow(row)
               return (
                  <tr
                     {...row.getRowProps()}
                     style={{
                        cursor: 'pointer',
                        background:
                           row.original.id === editorActiveTabId
                              ? '#303030'
                              : null,
                        margin: '40px'
                     }}
                     key={row.id}
                     onClick={() => {
                        const { original } = row
                        const {
                           songThumbnialUrl = '',
                           songName,
                           artist,
                           previewUrl,
                           id
                        } = original
                        updateSongDetails(
                           songThumbnialUrl,
                           songName,
                           artist,
                           previewUrl,
                           id
                        )
                     }}
                  >
                     {row.cells.map(cell => (
                        <td
                           {...cell.getCellProps()}
                           style={{
                              color: 'white',
                              fontFamily: 'Assistant',
                              fontWeight: '600',
                              fontSize: '16px',
                              paddingBottom: '16px',
                              paddingTop: '16px',
                              paddingLeft: '32px',
                              fontStyle: 'normal'
                           }}
                           key={uuid()}
                        >
                           {cell.render('Cell')}
                        </td>
                     ))}
                  </tr>
               )
            })}
         </tbody>
      </table>
   )
})

export default SpotifyEditorTable
