import Mock from 'mockjs'
import { demoList } from './list'
import { demoDetail } from './detail'

Mock.mock('/product/list', {
  code: 200,
  msg: '取得列表',
  data: demoList,
  success: true
})

Mock.mock('/product/detail', {
  code: 200,
  msg: '取得列表',
  data: demoDetail,
  success: true
})
