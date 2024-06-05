"use client";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
} from "recharts";
import CustomTooltip from "./CustomTooltip/CustomTooltip";
import { marketPrices } from "./data";
import { getCustomTick } from "./helpers";
import "./styles.css";

const Chart = () => {
  const isMdOrLarger = useBreakpointValue({ base: false, md: true });
  return (
    <Box width={{ base: "100%", xxl: "850px" }} height={355}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={marketPrices}>
          <defs>
            {/* ETH */}
            <linearGradient id="ETHcolor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#cbb3fc" stopOpacity={1} />
              <stop offset="50%" stopColor="#cbb3fc" stopOpacity={1} />
              <stop offset="90%" stopColor="#45566f" stopOpacity={1} />
              <stop offset="97%" stopColor="#212636" stopOpacity={1} />
            </linearGradient>
            <filter id="ETHshadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="5"
                floodColor="rgba(203, 179, 252, 1)"
              />
            </filter>

            {/* Poly */}
            <linearGradient id="PolyColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#b68cfe" stopOpacity={1} />
              <stop offset="20%" stopColor="#9c64fd" stopOpacity={1} />
              <stop offset="90%" stopColor="#503089" stopOpacity={1} />
              <stop offset="97%" stopColor="#241c3d" stopOpacity={1} />
            </linearGradient>
            <filter
              id="PolyShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="5"
                floodColor="rgba(182, 140, 254, 1)"
              />
            </filter>

            {/* Poly Gaming */}
            <linearGradient id="PolyGamingColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f53939" stopOpacity={1} />
              <stop offset="70%" stopColor="#c70b04" stopOpacity={1} />
              <stop offset="90%" stopColor="#700b09" stopOpacity={1} />
              <stop offset="97%" stopColor="#3d1318" stopOpacity={1} />
            </linearGradient>
            <filter
              id="PolyGamingShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="5"
                floodColor="rgba(245, 57, 57, 1)"
              />
            </filter>
          </defs>

          {isMdOrLarger && (
            <>
              <YAxis
                stroke="#4D4E59"
                tick={(tickObject) => getCustomTick(tickObject)}
                tickCount={9}
              />

              <XAxis tick={{ fontSize: 14 }} dataKey="date" />
              <CartesianGrid stroke="#ffffff42" vertical={false} />
            </>
          )}
          <RechartsTooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="ETH"
            fill="none"
            stroke="url(#ETHcolor)"
            strokeWidth={2}
            filter="url(#ETHshadow)"
          />
          <Area
            type="monotone"
            dataKey="Poly"
            fill="none"
            stroke="url(#PolyColor)"
            strokeWidth={2}
            filter="url(#PolyShadow)"
          />
          <Area
            type="monotone"
            dataKey="PolyGaming"
            fill="none"
            stroke="url(#PolyGamingColor)"
            strokeWidth={2}
            filter="url(#PolyGamingShadow)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Chart;
