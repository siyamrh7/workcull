import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://www.google.com/search?q=work+cull&sxsrf=ALeKk01U3MD3ywfAx93rXTk3iSOW9D_vCw%3A1628527698797&ei=UlwRYdKWMLad4-EP39aE6Aw&oq=work+cull&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAEIAEEAoyBggAEBYQHjIICAAQFhAKEB4yBggAEBYQHjIICAAQFhAKEB4yBggAEBYQHjIJCAAQyQMQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIIxCwAxAnOgcIABBHELADOgQIABAeOgYIABAFEB46CAgAEAUQChAeOgYIABAIEB5KBQg8EgExSgQIQRgBUL0NWL0NYIEjaAFwAHgAgAGwAYgBzgOSAQMwLjOYAQCgAQHIAQnAAQE&sclient=gws-wiz&ved=0ahUKEwjSh_m3sqTyAhW2zjgGHV8rAc0Q4dUDCA4&uact=5" target="_blank" rel="noopener noreferrer">WORK CULL</a>
        <span className="ml-1">&copy; 2021 WORK CULL FOUNDATION</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="/" target="_blank" rel="noopener noreferrer">WORK CULL</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
