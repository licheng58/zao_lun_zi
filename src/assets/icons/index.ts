//获取当前svg目录下的所有svg文件
const req = require.context('@/assets/icons/svg', false, /\.svg$/)
//解析
const requireAll = (requireContext: any) => {
  return requireContext.keys().map(requireContext)
}
requireAll(req)
