import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np

NAVY     = "#1A2B4A"
NAVY_MID = "#2E5D9E"
ORANGE   = "#E8612C"
GREEN    = "#1D8A5B"
RED      = "#C0392B"
YELLOW   = "#D48B14"
TEXT_D   = "#1A2B4A"
TEXT_M   = "#4A5568"
TEXT_L   = "#718096"
LIGHT_BG = "#F7F9FC"
FOOTER   = "DataWeave DSIM  ·  Reference Dashboard Concept  ·  April 2026"

def add_footer(fig):
    fig.text(0.5, 0.005, FOOTER, ha='center', va='bottom', fontsize=8.5,
             color=TEXT_L, fontstyle='italic')

# ─────────────────────────────────────────────────────────
# CHART 1: iROI by Channel
# ─────────────────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(14, 7), facecolor='white')
ax.set_facecolor('white')

channels  = ["Onsite\nSearch", "Sponsored\nBrands", "Sponsored\nBrands Video", "Offsite\nDisplay"]
iroi_vals = [0.83, 1.12, 1.28, 1.55]
colors_b  = [RED, YELLOW, "#6BAE75", GREEN]
budget    = ["63% of budget", "15%", "—", "22% of budget"]

bars = ax.barh(channels, iroi_vals, color=colors_b, height=0.5, zorder=3)
ax.axvline(x=1.0, color=TEXT_L, linestyle='--', linewidth=1.5, zorder=4)
ax.text(1.02, -0.58, 'Break-even', color=TEXT_L, fontsize=9, va='center', fontstyle='italic')

for bar, val, pct in zip(bars, iroi_vals, budget):
    ax.text(val + 0.03, bar.get_y() + bar.get_height()/2, f'{val:.2f}',
            va='center', ha='left', fontsize=13, fontweight='bold', color=TEXT_D)
    if pct not in ('—',):
        ax.text(0.03, bar.get_y() + bar.get_height()/2, pct,
                va='center', ha='left', fontsize=9, color='white', fontweight='bold')

ax.set_xlim(0, 1.85)
ax.set_xlabel('iROI — Incremental Sales per $1 Spent', fontsize=12, color=TEXT_M, labelpad=8)
ax.set_yticks(range(len(channels)))
ax.set_yticklabels(channels, fontsize=12, color=TEXT_D)
ax.xaxis.grid(True, color='#E2E8F0', linewidth=0.7, zorder=0)
ax.yaxis.grid(False)
for sp in ['top','right']: ax.spines[sp].set_visible(False)
for sp in ['left','bottom']: ax.spines[sp].set_color('#E2E8F0')
ax.tick_params(colors=TEXT_M)

fig.suptitle('iROI by Channel — Lactalis PoC',
             fontsize=16, fontweight='bold', color=TEXT_D, x=0.08, ha='left', y=0.97)
ax.set_title('Net-new incremental return per dollar · national ROAS masked a $30K/day misallocation opportunity',
             fontsize=10, color=TEXT_M, loc='left', pad=6, fontstyle='italic')

# top accent bar
fig.patches.append(mpatches.FancyBboxPatch((0, 0.965), 1, 0.035,
    boxstyle='square,pad=0', linewidth=0, facecolor=ORANGE, transform=fig.transFigure, zorder=10))
add_footer(fig)
plt.tight_layout(rect=[0, 0.04, 1, 0.94])
plt.savefig('iroi-channels.png', dpi=150, bbox_inches='tight', facecolor='white')
plt.close()
print("✅ iroi-channels.png")

# ─────────────────────────────────────────────────────────
# CHART 2: Impact Decomposition Waterfall
# ─────────────────────────────────────────────────────────
fig, ax = plt.subplots(figsize=(14, 7), facecolor='white')
ax.set_facecolor('white')

labels  = ['Baseline\nOrganic', 'On-Shelf\nAvailability', 'Share of\nSearch',
           'Content\nQuality', 'Sponsored\nMedia', 'Sub-Brand\nHalo', 'Total\nWalmart Sales']
values  = [2.8, 0.6, 0.9, 0.3, 1.1, 0.4, 6.1]
running = [0,   2.8, 3.4, 4.3, 4.6, 5.7, 0]
cols    = ['#8899AA', GREEN, GREEN, GREEN, NAVY_MID, NAVY_MID, NAVY]
is_tot  = [False]*6 + [True]

for idx, (lbl, val, base, col, tot) in enumerate(zip(labels, values, running, cols, is_tot)):
    bottom = 0 if tot else base
    ax.bar(idx, val, bottom=bottom, color=col, width=0.55, zorder=3,
           edgecolor='white', linewidth=1.5)
    if idx < len(labels)-1 and not tot:
        ax.plot([idx+0.28, idx+0.72], [base+val, base+val],
                color=TEXT_L, linewidth=0.8, linestyle=':', zorder=4)
    label_y = (bottom + val/2) if tot else (base + val + 0.08)
    ax.text(idx, label_y, f'${val:.1f}M', ha='center',
            va='center' if tot else 'bottom',
            fontsize=11, fontweight='bold', color='white' if tot else TEXT_D)

ax.set_xticks(range(len(labels)))
ax.set_xticklabels(labels, fontsize=11, color=TEXT_D)
ax.set_ylim(0, 7.2)
ax.set_ylabel('Walmart.com Sales ($M)', fontsize=12, color=TEXT_M)
ax.yaxis.grid(True, color='#E2E8F0', linewidth=0.7, zorder=0)
ax.xaxis.grid(False)
for sp in ['top','right']: ax.spines[sp].set_visible(False)
for sp in ['left','bottom']: ax.spines[sp].set_color('#E2E8F0')
ax.tick_params(colors=TEXT_M)

legend_items = [
    mpatches.Patch(color='#8899AA', label='Baseline organic'),
    mpatches.Patch(color=GREEN,     label='Shelf levers'),
    mpatches.Patch(color=NAVY_MID,  label='Media levers'),
    mpatches.Patch(color=NAVY,      label='Total'),
]
ax.legend(handles=legend_items, loc='upper left', fontsize=10, framealpha=0.9, edgecolor='#E2E8F0')

fig.suptitle('Sales Impact Decomposition — Walmart Q4 2025',
             fontsize=16, fontweight='bold', color=TEXT_D, x=0.08, ha='left', y=0.97)
ax.set_title("Each lever's independent causal contribution to incremental Walmart.com sales",
             fontsize=10, color=TEXT_M, loc='left', pad=6, fontstyle='italic')

fig.patches.append(mpatches.FancyBboxPatch((0, 0.965), 1, 0.035,
    boxstyle='square,pad=0', linewidth=0, facecolor=GREEN, transform=fig.transFigure, zorder=10))
add_footer(fig)
plt.tight_layout(rect=[0, 0.04, 1, 0.94])
plt.savefig('impact-waterfall.png', dpi=150, bbox_inches='tight', facecolor='white')
plt.close()
print("✅ impact-waterfall.png")

# ─────────────────────────────────────────────────────────
# CHART 3: Store Cluster Scatter
# ─────────────────────────────────────────────────────────
np.random.seed(42)
fig, ax = plt.subplots(figsize=(14, 7), facecolor='white')
ax.set_facecolor(LIGHT_BG)

clusters = {
    'over':  {'x': [1.3,1.5,1.45,1.6,1.35], 'y': [0.72,0.65,0.81,0.77,0.68],
              'size': [450,600,380,520,400], 'color': RED},
    'under': {'x': [0.55,0.45,0.62,0.5,0.7], 'y': [1.45,1.6,1.38,1.52,1.42],
              'size': [250,200,310,270,290], 'color': GREEN},
    'neut':  {'x': [0.9,1.1,0.85,1.05,1.15,0.95,1.0],
              'y':  [1.05,0.95,1.12,1.08,0.98,1.18,1.02],
              'size': [350,420,300,380,360,320,400], 'color': "#8899AA"},
}
for grp, data in clusters.items():
    ax.scatter(data['x'], data['y'], s=data['size'], c=data['color'],
               alpha=0.75, edgecolors='white', linewidths=1.5, zorder=3)

ax.axvline(x=1.0, color=TEXT_L, linewidth=1.2, linestyle='--', zorder=2)
ax.axhline(y=1.0, color=TEXT_L, linewidth=1.2, linestyle='--', zorder=2)
ax.text(1.65, 1.68, 'Over-invested',  fontsize=10, color=RED,    fontweight='bold', ha='right')
ax.text(0.33, 1.68, 'Under-invested', fontsize=10, color=GREEN,  fontweight='bold')
ax.text(1.65, 0.52, 'Re-evaluate',    fontsize=10, color=TEXT_L, ha='right')
ax.text(0.33, 0.52, 'Deprioritize',   fontsize=10, color=TEXT_L)

ax.set_xlim(0.3, 1.8)
ax.set_ylim(0.5, 1.8)
ax.set_xlabel('Media Spend Index vs. National Average', fontsize=12, color=TEXT_M, labelpad=8)
ax.set_ylabel('iROI — Incremental Return per $1',       fontsize=12, color=TEXT_M, labelpad=8)
ax.yaxis.grid(True, color='#D5DCE8', linewidth=0.5, zorder=0)
ax.xaxis.grid(True, color='#D5DCE8', linewidth=0.5, zorder=0)
for sp in ['top','right']: ax.spines[sp].set_visible(False)
ax.tick_params(colors=TEXT_M)

legend_items = [
    mpatches.Patch(color=RED,       label='Over-invested (5 clusters)'),
    mpatches.Patch(color=GREEN,     label='Under-invested (5 clusters)'),
    mpatches.Patch(color='#8899AA', label='Neutral (7 clusters)'),
]
ax.legend(handles=legend_items, loc='lower right', fontsize=10, framealpha=0.9, edgecolor='#E2E8F0')

fig.suptitle('Store Cluster Performance Map — 17 Clusters',
             fontsize=16, fontweight='bold', color=TEXT_D, x=0.08, ha='left', y=0.97)
ax.set_title('Each bubble = one store cluster  ·  Size = sales volume  ·  Position = media efficiency',
             fontsize=10, color=TEXT_M, loc='left', pad=6, fontstyle='italic')

fig.patches.append(mpatches.FancyBboxPatch((0, 0.965), 1, 0.035,
    boxstyle='square,pad=0', linewidth=0, facecolor=NAVY_MID, transform=fig.transFigure, zorder=10))
add_footer(fig)
plt.tight_layout(rect=[0, 0.04, 1, 0.94])
plt.savefig('store-clusters.png', dpi=150, bbox_inches='tight', facecolor='white')
plt.close()
print("✅ store-clusters.png")

# ─────────────────────────────────────────────────────────
# CHART 4: Availability × Media Dual-Axis
# ─────────────────────────────────────────────────────────
weeks = list(range(1, 13))
osa   = [88, 87, 85, 82, 79, 76, 78, 80, 83, 85, 86, 87]
spend = [120,140,200,280,380,420,380,300,180,140,120,100]

fig, ax1 = plt.subplots(figsize=(14, 7), facecolor='white')
ax1.set_facecolor('white')
ax2 = ax1.twinx()

ax1.axvspan(4.5, 8.5, alpha=0.07, color=RED, zorder=1)
ax1.text(6.5, 73.5, 'Peak media period\nOSA at 76–78%', ha='center', va='bottom',
         fontsize=9, color=RED, fontstyle='italic',
         bbox=dict(boxstyle='round,pad=0.3', facecolor='white', edgecolor=RED, alpha=0.85))

l1, = ax1.plot(weeks, osa,   color=ORANGE,  linewidth=2.8, marker='o', markersize=5,
               label='On-Shelf Availability (OSA %)', zorder=4)
l2, = ax2.plot(weeks, spend, color=NAVY_MID, linewidth=2.2, linestyle='--', marker='s',
               markersize=4, label='Media Spend ($K)', zorder=4)

ax1.annotate('Ad spend amplifying\nan OOS problem',
             xy=(6, 76), xytext=(8.6, 71),
             fontsize=9, color=RED,
             arrowprops=dict(arrowstyle='->', color=RED, lw=1.2),
             bbox=dict(boxstyle='round,pad=0.3', facecolor='white', edgecolor=RED, alpha=0.85))

ax1.set_xlim(0.5, 12.5)
ax1.set_ylim(65, 95)
ax2.set_ylim(0, 520)
ax1.set_xticks(weeks)
ax1.set_xticklabels([f'Wk {w}' for w in weeks], fontsize=10, color=TEXT_M)
ax1.set_ylabel('On-Shelf Availability (%)', fontsize=12, color=ORANGE,   labelpad=8)
ax2.set_ylabel('Media Spend ($K)',          fontsize=12, color=NAVY_MID, labelpad=8)
ax1.tick_params(axis='y', labelcolor=ORANGE)
ax2.tick_params(axis='y', labelcolor=NAVY_MID)
ax1.tick_params(axis='x', colors=TEXT_M)
ax1.yaxis.grid(True, color='#E2E8F0', linewidth=0.7, zorder=0)
ax1.xaxis.grid(False)
for sp in ['top']: ax1.spines[sp].set_visible(False)
for sp in ['top']: ax2.spines[sp].set_visible(False)
ax1.spines['bottom'].set_color('#E2E8F0')

ax1.legend([l1, l2], [l1.get_label(), l2.get_label()],
           loc='lower right', fontsize=10, framealpha=0.9, edgecolor='#E2E8F0')

fig.suptitle('Availability Rate vs. Media Spend — Peak Media Period',
             fontsize=16, fontweight='bold', color=TEXT_D, x=0.08, ha='left', y=0.97)
ax1.set_title('During peak media weeks, in-stock rate fell to 76–78% — every ad dollar driving traffic to unavailable products',
              fontsize=10, color=TEXT_M, loc='left', pad=6, fontstyle='italic')

fig.patches.append(mpatches.FancyBboxPatch((0, 0.965), 1, 0.035,
    boxstyle='square,pad=0', linewidth=0, facecolor=ORANGE, transform=fig.transFigure, zorder=10))
add_footer(fig)
plt.tight_layout(rect=[0, 0.04, 1, 0.94])
plt.savefig('availability-media.png', dpi=150, bbox_inches='tight', facecolor='white')
plt.close()
print("✅ availability-media.png")

print("\nAll 4 infographics created successfully.")
