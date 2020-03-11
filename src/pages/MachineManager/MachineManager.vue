<template>
  <div className="machine-manager-page">
    <!-- 多选表格 -->
    <SelectTable />
  </div>
</template>

<script>
import SelectTable from './components/SelectTable';

export default {
  name: 'MachineManager',
  components: {
    SelectTable,
  },
};
</script>
