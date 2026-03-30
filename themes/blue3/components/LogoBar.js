import { siteConfig } from '@/lib/config'

/**
 * Logo区域 - 个人信息卡片
 * 动态读取 notion 数据库中的头像、作者名、简介
 * @param {*} props
 * @returns
 */
export default function LogoBar(props) {
  const { siteInfo } = props
  const author = siteConfig('AUTHOR')
  const bio = siteConfig('BIO')
  const icon = siteInfo?.icon

  return (
    <div id='top-wrapper' className='w-full'>
      <div className='w-full rounded-xl overflow-hidden bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 shadow-sm py-4'>

        {/* 头像区域 - 90x90 圆形居中 */}
        <div className='flex justify-center mb-3'>
          <div className='w-[90px] h-[90px] rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-700 flex-shrink-0'>
            {icon
              ? <img
                  src={icon}
                  alt={author}
                  style={{ width: '90px', height: '90px', objectFit: 'cover', display: 'block' }}
                />
              : <div className='w-full h-full bg-neutral-200 dark:bg-neutral-700' />
            }
          </div>
        </div>

        {/* 文字信息区域 - 居中 */}
        <div className='text-center px-3'>
          <div className='text-base font-semibold text-neutral-800 dark:text-neutral-100 truncate'>
            {author}
          </div>
          <div className='text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 truncate'>
            {bio}
          </div>
        </div>

      </div>
    </div>
  )
}
