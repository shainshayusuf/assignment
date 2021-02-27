import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import WarehouseTable from "../../src/components/WarehouseTable";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("WarehouseTable.vue", () => {
  let getters;
  let store;

  const warehouseList = [
    {
      name: "Warehouse-4567",
      code: "W-000012",
      id: 12,
      city: "Indore",
      space_available: 97,
      type: "Warehouse Service",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: true,
    },
    {
      name: "Warehouse-458",
      code: "W-000013",
      id: 13,
      city: "Delhi",
      space_available: 654,
      type: "Leasable Space",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: false,
    },
  ];
  const updateList = {
    name: "Warehouse-458",
    code: "W-000013",
    id: 13,
    city: "Chennai",
    space_available: 654,
    type: "Leasable Space",
    cluster: "cluster-a-1",
    is_registered: true,
    is_live: false,
  };
  const result = [
    {
      name: "Warehouse-4567",
      code: "W-000012",
      id: 12,
      city: "Indore",
      space_available: 97,
      type: "Warehouse Service",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: true,
    },
    {
      name: "Warehouse-458",
      code: "W-000013",
      id: 13,
      city: "Chennai",
      space_available: 654,
      type: "Leasable Space",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: false,
    },
  ];
  beforeEach(() => {
    getters = {
      loadedWarehouse: () => warehouseList,
    };

    store = new Vuex.Store({
      getters,
    });
  });

  it("should return warehouse list", () => {
    const state = { warehouseList };
    expect(getters.loadedWarehouse(state)).toEqual(warehouseList);
  });
});
